import React, { useState, useEffect } from "react";

const Counter = React.memo(({ data }) => {
    let [count, setCount] = useState(0);
    let [count2, setCount2] = useState(0);

    const incrCount = () => {
        setCount(count + 1);
    };

    const descCount = () => {
        setCount(count - 1);
    };

    const incrCount2 = () => {
        setCount2(count2 + 2); 
    };

    const descCount2 = () => {
        setCount2(count2 - 2); 
    };

    useEffect(() => {
        console.log(data);
        console.log("Only callback Function: Everytime");
    });

    useEffect(() => {
        console.log("callback function with empty array: 1st time load");
    }, []);

    useEffect(() => {
        console.log("callback with state array: count or count2 changed");
    }, [count, count2]);

    useEffect(() => {
        return () => {
            console.log("callback with return: component unmount");
        };
    }, []);

    return (
        <>
            <section>
                <button onClick={descCount}>Desc Count</button>
                <h1>Count: {count}</h1>
                <button onClick={incrCount}>Incr Count</button>
            </section>
            <br /><br />
            <section>
                <button onClick={descCount2}>Desc Count2</button>
                <h1>Count2: {count2}</h1>
                <button onClick={incrCount2}>Incr Count2</button>
            </section>
        </>
    );
});

export default Counter;
