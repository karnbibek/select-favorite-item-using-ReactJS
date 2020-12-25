import React, { useEffect, useState } from 'react';
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

const View = ({ planet, index }) => {
    const [favorites, setFavorites] = useState([]);
    const [update, setUpdate] = useState(false);

    const getArray = JSON.parse(localStorage.getItem('favorites') || '0');
    useEffect(() => {
        if (getArray !== 0) {
            setFavorites([...getArray])
        }
    }, [update]);
    
    const addFav = (props) => {
        let array = favorites;
        var addArray = true;
        array.map((item, key) => {
            if (item === props.index) {
                array = array.filter(val => { return val !== item })
                setUpdate(!update);
                addArray = false;
                return null;
            }
        });
        if (addArray) {
            array.push(props.index);
            setUpdate(!update);
        }
        
        setFavorites([...array]);
        localStorage.setItem("favorites", JSON.stringify([...array]));

        var storage = localStorage.getItem('favItem' + (props.index) || '0');
        if (storage == null) {
            localStorage.setItem(('favItem' + props.index), JSON.stringify(props.planet));
            localStorage.setItem("favorites", JSON.stringify([...array]));
        } else {
            localStorage.removeItem('favItem' + (props.index));
        }
    }

    if (!planet) {
        return <div>Loading...</div>;
    }
    return (
        <div style={{ textAlign: "center" }}>
            <div className="ui centered card" style={{ marginBottom: "20px" }}>
                <div className="content">
                    <div className="header">
                        {planet.name}
                    </div>
                </div>
                <div className="extra content" style={{ color: "red", fontSize: "20px" }}>
                    {favorites.includes(index) ? (
                        <IoIosHeart
                            onClick={() => addFav({ planet, index })}
                        />
                    ) : (
                            <IoIosHeartEmpty
                                onClick={() => addFav({ planet, index })}
                            />
                        )}
                </div>
            </div>
        </div>
    );
}

export default View;