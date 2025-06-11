# Ep-9 optimizing App

Let us see how we optimise our app !! We know What SRP(Single Responsibility Principle) means!! So here each component should have single responsibility!! 

We break code into Modules so that we can create test case and bug can be caught by just testing this component!!

If you follow SRP , your code become more reusable , mainatianble and testable!!

SRP dot have some rules , but code should be as light as possible!!

If there is any bug then TestCase should be able to get that!! Now if you Component is having single responsibility then the testcase we need to devlop need to test only that single responsibility ,and if that fails we can say it is bug so more testable!!



Today we will see Custom Hooks (normal JS functions ) !!Hook is normal utility function!! We will take our some thing from some component and create hook so that our code becomes more modular!!

![alt text](image.png)

Now let us see this component 

```jsx

const RestaurantDetails = () => {
    const { resName } = useParams();



    let [restaurant,setRrestaurant]=useState(null);

    useEffect(() => {fetchdata()},[resName])

    const fetchdata = async()=> {
        const data=await fetch(`http://localhost:8080/api/res/getMenu?name=${resName}`);
        const json=await data.json()
        setRrestaurant(json)
        console.log(json)
    }
    if (!restaurant) return <div>No restaurant selected.</div>;



    return (
        <div className="restaurant-card">
            <img src={restaurant.imageUrl} alt={restaurant.name} className="restaurant-image" />
            <div className="restaurant-info">
                <h2 className="restaurant-name">{restaurant.name}</h2>
                <p className="restaurant-cuisines">
                    <strong>Cuisines:</strong> {restaurant.cuisines.join(', ')}
                </p>
                <p className="restaurant-rating">⭐ {restaurant.stars} stars</p>

                <h3 className="menu-heading">Menu</h3>
                <div className="menu-list">
                    {restaurant.menuItems?.map((item, index) => (
                        <div key={index} className="menu-item">
                            <span>{item.name}</span>
                            <span className="menu-price">₹{item.price}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RestaurantDetails;


```
This have 2 responsibilities 
1. fetch data
2. display on UI

from this component we take out responsibility to fetchdata from backend API and put in custom hook!!

A hook usually starts from `use` keyword!!It helps React to understand that this function is a hook!!

so we name our hook as `useRestuarantMenu` and will place API insied that !! so that component just use hook and display the data!! We abstracted how to get the data!!

`Hooks are just utility fucntions or helper fucntions so we keep it in utils folder`

```jsx
const RestaurantDetails = () => {
    const { resName } = useParams();
    
    const restaurant = useResturantMenu(resName);
    if (!restaurant) return <div>No restaurant selected.</div>;



    return (
        <div className="restaurant-card">
            <img src={restaurant.imageUrl} alt={restaurant.name} className="restaurant-image" />
            <div className="restaurant-info">
                <h2 className="restaurant-name">{restaurant.name}</h2>
                <p className="restaurant-cuisines">
                    <strong>Cuisines:</strong> {restaurant.cuisines.join(', ')}
                </p>
                <p className="restaurant-rating">⭐ {restaurant.stars} stars</p>

                <h3 className="menu-heading">Menu</h3>
                <div className="menu-list">
                    {restaurant.menuItems?.map((item, index) => (
                        <div key={index} className="menu-item">
                            <span>{item.name}</span>
                            <span className="menu-price">₹{item.price}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RestaurantDetails;

```
Let us see custom hook ,it is just like a functional component!!

```jsx
import {useEffect, useState} from "react";

const  useResturantMenu=(resName)=>{

    const [resInfo,setResInfo]=useState(null);

    useEffect(()=>{fetchdata()},[]);

    const fetchdata = async()=> {
        const data=await fetch(`http://localhost:8080/api/res/getMenu?name=${resName}`);
        const json=await data.json();
        setResInfo(json);
        console.log(json);
    }
    return resInfo;
}


export default useResturantMenu;

```

Working fine!!

![alt text](image-1.png)

>Here we are just setting JSon ,but in real-time you get the data in json and then json has many other fields except data .generally data is present in json.data field

Now if issue in fetch data then we need to chnage in hook and if deiplay data have issue then chnage in `RestaurantDetails`!!

>Note: you can put custom hooks on npm and publish them as package!! 

Now we want a hook that tells online/offline !!A feature that tells whether the user is online or offline!! We are going to make a custom hook!!
If interent of user not working then we should display a webpage showing "Pls check your internet"

```jsx
const useOnlineStatus=()=>{
    //check online or offline 
    
    //return true or false
}

export default useOnlineStatus;

```

we need to add a event listener once to check online or offline status!!
To add once we use useEffect with dependency array!!

```jsx
import {useEffect, useState} from "react";

const useOnlineStatus=()=>{
    const [onlineStatus,setOnlineStatus]=useState(true)

    //check online or offline
    useEffect(()=>{
        console.log("Useffect called")

        const handler = () => {
            console.log("online called");
            setOnlineStatus(true);
        };

        const offlineHandler=()=>{
            console.log("offline called");
            setOnlineStatus(false);
        }

        window.addEventListener('online',handler)

        window.addEventListener('offline',offlineHandler)

    },[]);
    //return true or false
    return onlineStatus;
}

export default useOnlineStatus;
```

Now in body if offline show Offline page 

```jsx

const Body = () => {

    let [resturants,setResturants]=useState([]);

    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {fetchdata()},[])

    const fetchdata = async()=> {
        const data=await fetch("http://localhost:8080/api/res");
        const json=await data.json()
        setResturants(json)
    }

    const searchdata = async(kw)=> {
        const data=await fetch(`http://localhost:8080/api/res/search?keyword=${kw}`);
        const json=await data.json()
        setResturants(json)
    }

    const onlineStatus=useOnlineStatus();
    console.log(onlineStatus)
    if(onlineStatus===false){
        return <h1>No interent connection</h1>
    }

    if(resturants.length==0){
        return <Shimmer/>
    }
    return (
        <div className="body">
            <div className="search-bar">
                <input type="text" className="search-box"       value={searchTerm}
                       onChange={(e) => setSearchTerm(e.target.value)}/>
                <button onClick={()=>searchdata(searchTerm)}>Search</button>
                <button onClick={()=>fetchdata()}>Reset</button>
            </div>
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    resturants=resturants.filter(
                        (resturant => resturant.stars>4.0)
                    )
                    setResturants(resturants);
                }}>
                Top Rated Resturant</button>
            </div>
            <div className="res">
                {resturants.map((restaurant, index) => (
                    <div className="card" key={index}>
                        <RestuarantCard
                            data={restaurant}
                        />
                    </div>
                ))}

            </div>
        </div>
    )
};

export default Body;

```
In Hook React recommend word `use` as prefix but it is not mandatory!! 

Read about `Linters` !!used in Industry !! If you do not use `use` keyword in Hook Linters will throw error!! 

we know about Bundlers!! Bundlers like parcel bundles up all files and put in one JS file , but if we have very large application ,now we have alot of components so our final JS file size will increase too!!We need to optimize it!!

we need to break app into smaller pieces !! We will make smaller bundles of our files!! This process is called as `chundking` or `code-spilliting` or `dynamic-bundling` or `lazy-loading`!! 





















