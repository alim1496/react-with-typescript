import React, { FC, useState, ChangeEvent, MouseEvent, Dispatch, SetStateAction } from "react";
import { SeriesProps } from "../interfaces/SeriesProps";

interface Props {
    seriesList: SeriesProps["seriesList"],
    setSeriesList: Dispatch<SetStateAction<SeriesProps["seriesList"]>>
}

const Form: FC<Props> = ({ seriesList, setSeriesList }) => {

    const [input, setInput] = useState({
        name: "",
        genre: "",
        cover: "",
        imdb: 0,
        seasons: 0
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        setInput({
            ...input,
            [name]: value
        });
    };

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        const { name, genre, cover, imdb, seasons } = input;
        const series = { name, genre, cover, imdb, seasons };
        setSeriesList([...seriesList, series]);
        setInput({
            name: "",
            genre: "",
            cover: "",
            imdb: 0,
            seasons: 0
        });
    };

    return (
        <div className="form-container">
            <div className="form-div">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={input.name} onChange={handleChange} />
            </div>
            <div className="form-div">
                <label htmlFor="genre">Genre</label>
                <input type="text" name="genre" id="genre" value={input.genre} onChange={handleChange} />
            </div>
            <div className="form-div">
                <label htmlFor="cover">Cover Link</label>
                <input type="text" name="cover" id="cover" value={input.cover} onChange={handleChange} />
            </div>
            <div className="form-div">
                <label htmlFor="imdb">IMDB Rating</label>
                <input type="number" name="imdb" id="imdb" value={input.imdb} onChange={handleChange} />
            </div>
            <div className="form-div">
                <label htmlFor="seasons">Total Seasons</label>
                <input type="number" name="seasons" id="seasons" value={input.seasons} onChange={handleChange} />
            </div>
            <button type="button" onClick={handleClick}>Add Series</button>
        </div>
    );
};

export default Form;
