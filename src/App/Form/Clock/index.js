import { useState, useEffect } from "react";
import { Day } from "./styled";
import { useCurrentDate } from "./useCurrentDate"

const formatDate = (date) => date.toLocaleString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
});


export const Clock = () => {
    const date = useCurrentDate();

    return (
        <Day>
            Dzisiaj jest {" "}
            {formatDate(date)}
        </Day>
    )

};