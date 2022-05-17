import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";

function Three() {
    return (
        <>
            <MyComponent name={"React"} />
            <MyComponent /> {/* defaultProps 값이 들어간다. */}
            <MyComponent>리액트</MyComponent>
            {/*<MyComponent name={3}>룰루랄라</MyComponent>*/}


            <Counter />
            <br/>
            <Say />
        </>
    );
}

export default Three;