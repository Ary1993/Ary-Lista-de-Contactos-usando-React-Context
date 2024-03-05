const getState = ({getStore, getActions, setStore}) => {
    return {
        store: {
            demo: [
                { title: "FIRST", background: "white", initial: "white" },
                { title: "SECOND", background: "white", initial: "white" },
                { title: "SECOND", background: "white", initial: "white" }
            ],
            titulo: "Flux con React",
            myArray: [],
            myObject: {},
            isLogin: false,
            mensaje: "Spain 54"
        },
        // Define actions within the context
        actions: {
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            loadSomeData: () => {
                /*fetch()
                    .then((response) => response.json())
                    .then((data) => setStore({ foo: data.bar }));*/
            },
            changeColor: (index, color) => {
                const store = getStore();
                let demo = store.demo.map((element, i) => {
                    if (i === index) {
                        return { ...element, background: color };
                    }
                    return element;
                });
                setStore({ demo : demo });
            }
        
            
        }
    };
};

export default getState;