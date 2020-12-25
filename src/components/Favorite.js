import React from 'react';
import { IoIosHeart } from "react-icons/io";

const Favorite = () => {
    var favList = [{}];
    const getArray = JSON.parse(localStorage.getItem('favorites') || '0');

    for (var i = 0; i < getArray.length; i++) {
        let x = getArray[i];
        favList[i] = JSON.parse(localStorage.getItem('favItem' + [x]) || '0');
    }

    if (favList.length === 1) {
        if (!favList[0].name) {
            return (
                <div style={{ textAlign: "center" }}>
                    <h2 style={{ margin: "20px" }}>Your Favorite items</h2>
                    <div className="ui centered card">
                        <div className="content">
                            <div className="header">
                                Seems like you haven't selected any planets yet!
                        </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h2>Your Favorite items</h2>
            {favList.map((item, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                    { item.name ?
                        <div className="ui centered card" style={{ marginBottom: "20px" }}>
                            <div className="content">
                                <div className="header">
                                    {item.name}
                                </div>
                            </div>
                            <div className="extra content" style={{ color: "red", fontSize: "20px" }}>
                                {<IoIosHeart />}
                            </div>
                        </div>
                        : null
                    }
                </div>
            ))}
        </div>
    );
}

export default Favorite;