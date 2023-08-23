import React, { useRef, useEffect, useState, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withOutCallback = useRef(0);
    const withCallback = useRef(0);
    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    // WithOut callback function
    const ValidateWithOutCallback = (data) => {
        console.log(data);
    };
    useEffect(() => {
        ValidateWithCallback(data);
        ValidateWithOutCallback(data);
    }, [data]);
    useEffect(() => {
        withOutCallback.current++;
    }, [ValidateWithOutCallback]);
    // With callback function
    const ValidateWithCallback = useCallback((data) => {
        console.log(data);
    }, []);
    useEffect(() => {
        withCallback.current++;
    }, [ValidateWithCallback]);
    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Render withoutCallback: {withOutCallback.current}</p>
            <p>Render withCallback: {withCallback.current}</p>
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                type="email"
                className="form-control"
                id="email"
                value={data.email || ""}
                name="email"
                onChange={handleChange}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
