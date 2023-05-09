import { useState } from "react";
import { Link } from "react-router-dom";

const AddChocolet = () => {


    const [selected, setSelected] = useState('');

    const handleChange = event => {
        setSelected(event.target.value);
    };

    //   console.log(selected);


    const handleAddChocolet = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const country = form.country.value;
        const category = selected;
        const newChocolet = { name, country, category }
        console.log(newChocolet);

        fetch('http://localhost:5000/chocolets', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newChocolet)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }



    return (
        <div>
            <div className="bg-base-300 py-20 px-60">
                <Link to='/'>All Chocolets</Link>

                <form onSubmit={handleAddChocolet}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="info@site.com" name="name" className="input input-bordered w-full rounded-lg border-base-100" />

                        </label>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Country</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="info@site.com" name="country" className="input input-bordered w-full rounded-lg border-base-100" />

                        </label>
                    </div>

                    <div className="mt-3">
                        <span className="label-text text-xl font-semibold px-1">Category</span>
                        <select onChange={handleChange} className="select w-full mt-2">
                            <option disabled selected>Select the category</option>
                            <option>Dark Chocolet</option>
                            <option>Kitkat</option>
                            <option>Dairy Milk</option>
                            <option>Wafer</option>
                        </select>
                    </div>
                    <input type="submit" className="btn w-full bg-[#6c3939] mt-10" value="Save" />
                </form>
            </div>
        </div>
    );
};

export default AddChocolet;