import React, { FC } from "react";
import { SeriesProps } from "../interfaces/SeriesProps";

const List:FC<SeriesProps> = ({seriesList}) => (
    <div className="series-list">
        {seriesList.map((series) => (
            <div className="series-item">
                <img src={series.cover} alt="Series-cover" />
                <p><b>{series.name}</b></p>
                <p>{series.genre}</p> 
                <p>{series.seasons} seasons</p>
                <p>★★★★★ {series.imdb}</p>
            </div>
        ))}
    </div>
);

export default List;
