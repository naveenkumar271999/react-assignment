import { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

export function CreateProfile() {
    const [data, setData] = useState({name:"", description:""});

    function handleChange(e) {
        setData((data) => ({ ...data, [e.target.name]: e.target.value}));
    }

    function handleSubmit(e) {
        e.preventDefault();

        const profile = {
            name: data.name,
            description: data.description,
        };

        console.log({profile});
        axios
            .post("http://localhost:8000/api/profile", data)
            .then((res)  => {
                setData({name: "", description: ""});
                console.log(res.data.message);
            });
    }

    return (
        <section className="container">
            <Link to="/" className="button-back">
                <button type="button" className="button">
                    back
                </button>
            </Link>
            <section className="contents">
                <form
                    onSubmit={handleSubmit}
                    className="form-container"
                    noValidate
                >
                    <div>
                        <label className="label" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={data.name}
                            onChange={handleChange}
                            className="input"
                        />
                    </div>
                    <div>
                        <div>
                        <label className="label" htmlFor="description">
                            Description
                        </label>
                        </div>
                        <div>
                        <textarea
                            type="text"
                            name="description"
                            value={data.description}
                            onChange={handleChange}
                            className="input"
                        />
                        <div>
                        <button type="submit" className="button">
                            create profile
                        </button>
                        </div>
                        </div>
                    </div>
                </form>
            </section>
        </section>
    );
}