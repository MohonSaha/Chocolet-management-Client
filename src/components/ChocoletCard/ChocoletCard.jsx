

const ChocoletCard = ({ chocolet }) => {

    const { _id, name, country, category, photo } = chocolet;

    return (
        <tbody className="">
                        {/* row 1 */}
                        <tr>
                            <td>{photo? photo: "Not Available"}</td>
                            <td>{name}</td>
                            <td>{country}</td>
                            <td>{category}</td>
                            <th className="">
                                <div className="space-x-4">
                                    <button className="btn btn-square">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>

                                    <button className="btn btn-square">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </div>
                            </th>
                        </tr>
        </tbody>
    );
};

export default ChocoletCard;