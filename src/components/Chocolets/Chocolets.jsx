import { Link } from "react-router-dom";
import ChocoletCard from "../ChocoletCard/ChocoletCard";

const Chocolets = ({ chocolets }) => {

    const loadedChocolets = chocolets;

    return (
        <div>
            <Link to='/chocolets'>New Chocolet</Link>
            <div>



                <div className="md:p-20 p-4">
                    <div className="overflow-x-auto ">
                        <table className="table w-full">
                            {/* head */}
                            <thead>
                                <tr >
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Country</th>
                                    <th>Category</th>
                                    <th className="">Action</th>
                                </tr>
                            </thead>
                                
                                    {
                                        loadedChocolets.map(chocolet => <ChocoletCard
                                            chocolet={chocolet}
                                            key={chocolet._id}></ChocoletCard>)
                                    }
                        </table>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Chocolets;