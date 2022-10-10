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
            <div style={{display:"flex", flexDirection:"row"}}>
                <div>
                    <img height='300px' width='300px' url=""/>
                </div>
                <div style={{width:'100%'}}>
                    <form
                        onSubmit={handleSubmit}
                        className="form-container"
                        noValidate
                        style={{width:'100%'}}
                    >
                        <div style={{width:'100%'}}>
                            <label className="label" htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={data.name}
                                onChange={handleChange}
                                className="input"
                                style={{width:'100%'}}
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
                                style={{width:'100%', height:'200px'}}
                            />
                            
                            <div>
                            <button type="submit" className="button">
                                create profile
                            </button>
                            </div>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
            </section>
        </section>
    );
}