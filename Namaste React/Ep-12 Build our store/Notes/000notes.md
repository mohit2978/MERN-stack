# Redux Ep-12 Let's Build our store

Redux is not mandatory ,small or medium-sized application no need of redux ,but huge application needs Redux!!!`All application build using Redux can be built without Redux`!!

Redux is separate Library and React is separate so we need to install Redux in React!!

Redux is not the only library for managing state there are other like `Zustand`!!

Redux makes application easy to debug!!We have `Redux dev tools`!!

Redux is not only used with React but popularly used with React!!

There are two libraries redux offers

1. React-Redux --> bridge between react and redux!!
2. Redux toolkit (RTK)--> newer way to write redux!!Only Redux(Vanilla Redux) was complicated ,Reduc ToolKit made it bit easier!! Vanilla Redux require too much of boilerPlate code now after Redux toolkit removes boiler plate code!!

old way is called as `React Redux` or `Vanilla Redux`!!

new way ois to use with `Redux Toolkit`!!

Now we will devlop Cart!! Like we have cart on swiggy!!

## Architecture of Redux-toolkit
 
 We use word `Redux` for `Redux-toolkit` from now!!

 ![alt text](<Namaste React_250620_004154_1.jpg>) 
 ![alt text](<Namaste React_250620_004154_2.jpg>) 
 ![alt text](<Namaste React_250620_004154_3.jpg>)


## What we gonna do?

 ####  Redux ToolkitAdd commentMore actions
  - Install @reduxjs/toolkit (@ and / are there in name of RTK library) and react-redux (2libraries to install)
  - Build our store
  - Connect our store to our app
  - Slice (cartSlice)
  - dispatch(action) --> to write to Store
  - Selector --> to read from Store

installed both see package.json 

```json
  "dependencies": {
    "@reduxjs/toolkit": "^2.8.2",
    "@tailwindcss/vite": "^4.1.10",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "react-redux": "^9.2.0",
    "react-router": "^7.6.2",
    "react-router-dom": "^7.6.2",
    "tailwindcss": "^4.1.10"
  },
```
So now we build our stor inside utils!! Noww we need to create Store!!

we put store in utils!!

```jsx
import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./cartSlice";

const appStore = configureStore({
    // reducer: {
    //     cart: cartReducer,
    // },
});

export default appStore;

```

We use `configureStore()` function to create store that comes from `RTK`!! Inside store we add slices!! See Commented part!!

Now let us provide store to Application!! so in app.jsx!! So put entire application under Provider !!

```jsx
import {Provider} from "react-redux";

function App() {

    const [user, setUser] = useState("Mkr");

    useEffect(() => {
        setUser("Deepak");
    },[])
  return (
      <Provider store={appStore}>
          <UserContext.Provider value={{user,setUser}}>
              <>
                  <Header />
                  <main className="mt-[150px]">
                      <Outlet />
                  </main>
              </>
          </UserContext.Provider>
      </Provider>
  )
}
```
Provider is from React-Redux and in store we tell store!! Provider comes from react-redux as it acts as bridge ,RTK just create store to put store to React we use React-redux!!

creating store is `RTK` job but providing Store to react is `react-rddux` job!!

In Provider we provide `appStore` a sProvider !! If you want a portion of app to have redux not whole application put that part in `Provider`!!

Now lwt us create cartSlice!! We putting it in utils!!

`createSlice()` comes from reduxjs is used to from redux !! It takes configurations !!

1. name --> let us name as cart

2. Initial state -->inital state of slice

3. Reducers --> correspoding to action we put reducer function!!

action is cart 

- addItem 
- removeItem 
- clearCart


each of this has reducer function!! Each function has access to `state` and `action`!! let us take an example from counter!!

```js
import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  count: 0,
};

// Create the slice
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.count += 1; // Immer allows direct state mutation
    },
    decrement(state) {
      state.count -= 1;
    },
    incrementByAmount(state, action) {
      state.count += action.payload;
    },
  },
});

// Export actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Export reducer
export default counterSlice.reducer;
```
>Here we export actions as weel as reducers both

- action is an object passed into the reducer that tells it what to do.

- action.type is mandatory.

- action.payload is optional — for passing data (e.g. amounts, user info, etc.)

## How to use it 

tell configuerer about reducer

```js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

Use in react component 

```jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.count); //state.sliceName.dataName
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </div>
  );
};

export default Counter;

```
### Can You Write a Reducer Without state and action?
Technically, you must include both state and action in the reducer function signature — even if you’re not using them.

✅ Why? Because:

- Redux always calls the reducer with (state, action)

- If you omit one, you may get an error or unexpected behavior.

Now back to cart example !!

```js
import { createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state, action) => {
            return { items: [] };
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
```

In above reducers we are modifying the state directly !!


#### How these  two export working??

cartSlice is big Object having `actions` and `reducers` in the cartSlice!! so we exporting both from the cartSlice!!

whatever we pass to state ,we put in payload!!

This is our cartSlice Reducer!!

now in appStore we tell about this reducer

```jsx
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default appStore;

```
This is how we add slice to store!! For each slice we have We have reducer in Store!! Here reducer in store is big reducer for our whole app!!

Now we have added link for cart created cart componnet and at header linked cart component !!

in main.jsx

```jsx

            },
            {
                path: "/cart",
                element: <Cart />,
            },
            
 ```

In header

```jsx
                  </li>
                  <li className="px-4 font-bold text-xl">
                      <Link to="/cart">Cart - ({cartItems.length} items)</Link>
                  </li>
              </ul>
```

to get cart items from store in header

```jsx
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);
```

See cart.jsx

```jsx
const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    console.log(cartItems);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button
                    className=" p-2 m-2 bg-black text-white rounded-lg"
                    onClick={handleClearCart}
                >
                    Clear Cart
                </button>
                {cartItems?.length === 0 && (
                    <h1> Cart is empty. Add Items to the cart!</h1>
                )}

                {cartItems?.length !== 0  && cartItems.map((item, index) => (
                    <div key={index} >
                        <MenuItems name={item.name} price={item.price} />
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Cart;
```

now to clearCart we dispatch of clearCart()!!

MenuItems add items to cart 

```jsx


const MenuItems=({name,price})=>{

    const dispatch = useDispatch();
    const handleAddItem = () => {
        dispatch(addItem({name : name,price : price}));
    };

    return (
        <div className="flex items-center w-full my-4 px-4" >
            <span className="flex-1 text-lg">{name}</span>
            <span className="flex-1 text-lg text-green-600 my-4 text-center">₹{price}</span>
            <button
                className="p-2 mx-16 my-4 rounded-lg bg-red-300 text-white shadow-lg cursor-pointer"
                onClick={() => handleAddItem()} >
                    Add +
            </button>
        </div>
    )

}
export default MenuItems;
```

useSelector() is a hook!!It comes from react-redux library!!! useSelector helps to subscribe to store!!

`const cartItems = useSelector((store) => store.cart.items);`--> tells which part of store we need to access!!

now cartItems has data of store.Items!!

in slice when you do `console.log(state)` it prints just proxy object .state is a Proxy (because of Immer.js) So logging it like console.log(state) may not show updated changes immediately.
to print state use `console.log("Items array:", [...state.items]);`

this is how we dispatch an item 

```jsx
  const dispatch = useDispatch();
   const handleClearCart = () => {
        dispatch(clearCart());
    };
```
To dispatch we need `useDispatch()` hook!!
LEt us see another example!!
```jsx
    const dispatch = useDispatch();
    const handleAddItem = () => {
        dispatch(addItem({name : name,price : price}));
    };
```    
the item we passing is `action.payload` in reducers!!

```jsx
        addItem: (state, action) => {
            state.items.push(action.payload);
            console.log(state.items);
            console.log("Items array:", [...state.items]);

        },
```        
to put anything or update  on store  we use `dispatch()` and in dispatch we give action!!

to call reducers we call by `dispatch(action(...))` and in slice we have fucntion corresponding to every action!!Like above you can see function corresponding to addItem action!!

