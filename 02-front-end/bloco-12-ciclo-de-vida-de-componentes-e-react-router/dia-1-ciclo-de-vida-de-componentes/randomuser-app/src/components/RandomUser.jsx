import React from "react";

class RandomUser extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            data: undefined,
        }
        this.fetchRandomUser = this.fetchRandomUser.bind(this);
    }

    componentDidMount() {
        this.fetchRandomUser();
    }

    async fetchRandomUser() {
        this.setState({
            isLoading: true
        }, async () => {
            const response = await fetch('https://api.randomuser.me/');
            const { results } = await response.json();
            this.setState({
                isLoading: false,
                data: results[0],
            });
        })
    }

    shouldComponentUpdate(_nextProps, { data }) {
        // Caso a idade do usuário seja maior que 50, o componente NÃO deve ser renderizado. Aplique esta lógica no método shouldComponentUpdate.
        console.log(`shouldComponentUpdate: ${(data) ? data.dob.age < 50 : true}`);
        return (data) ? data.dob.age < 50 : true;
    }

    render() {
        const { isLoading, data: { name: { title, first, last } = '', email, dob: { age } = '', picture: { medium: avatar } = '' } = '' } = this.state;
        const loading = <div>loading...</div>
        const card = (
            <section>
                <h1>{`${title}. ${first} ${last}`}</h1>
                <span>{email}</span>
                <br></br>
                <span>{age}</span>
                <div>
                    <img src={avatar} alt="Avatar" />
                </div>
            </section>
        );
        return (
            <>
                {isLoading ? loading : card}
            </>
        );
    }
}

export default RandomUser;