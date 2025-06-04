# Ep-4 show me code

We are going to make food ordering app  like swiggy ,zomato!!

Planning needs to be done before building any app!!Do not blindly write code!

1. How app should look like???

![alt text](Gfff_250603_101329.jpg)

This is how our app gonna look like!! This is how we plan structure first!! 

2. components we can have ,we can have 3 major components : header ,body ,footer!!Further Header can have logo ,nav items(Ahome ,about us ,cart)!! Then body we have search , then we will have card container so we have Retuarant container inside that we have Retuarant card which has name of restuarant ,star-rating,cuisine,delivery-date !! Then at footer we have copyright ,links ,Adresss and contact !!

so now let us create vite app in code section!! as using intellij idea ultimate!!It creates gitignore file too for itself!!


### App

```jsx
import './App.css'

function App() {
  return (
    <>

    </>
  )
}

export default App
```
### main.jsx

```jsx
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

```

in main.jsx app is rendered to root!!

### index.html 

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

```

In index.html we have root this html page is rendered when you run app!!

Let us now build Header ,body,footer component!!

for a component remember structure 
1. lambda function 
2. export statement

1st created Header 

```jsx
const Header = () => {
    return (
        <>
            <div className="logo">
                <img src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-food-logo-png-image_5296974.png" alt="logo" />
            </div>
            <div className="navItems">
              <ul>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Contact</li>
                  <li>Cart</li>
              </ul>
            </div>
        </>
    )
}

export default Header
```

#### output :

![alt text](image.png)

can see how html is rendred!! Let us add some CSS!!

```css
.header{
    display: flex;
}

.logo img{
    width: 150px;
}
```
#### output :
![alt text](image-1.png)

The below css not works and shifts nav-bar to left above image!!Instead of changing size of image!!
```css
.logo {
  width: 100px;
}
```

Is because you're trying to control the image size, but you're only setting the size of the container div, not the image itself.

- .logo targets the div that wraps the image.

- But unless you also tell the image inside .logo to scale based on that container (e.g., with width: 100%), the image will keep its original size.

Now make list items horizntal!!and add some margin else list-items will hit each other

```css
.header{
    display: flex;
}

.logo img{
    width: 150px;
}

.navItems > ul {
    display: flex;
}

.navItems > ul > li {
    margin-left: 20px;
}
```
#### Output:
![alt text](image-2.png)

Now make nav-bar on left !!

```css
.header{
    display: flex;
    justify-content: space-between;
}

.logo img{
    width: 150px;
}

.navItems > ul {
    display: flex;
}

.navItems > ul > li {
    margin-left: 20px;
}
```

#### Output: 

![alt text](image-3.png)

then remove dots from the list!!

so put 

```css
.navItems > ul {
    display: flex;
    list-style: none;
}

```

#### Output :

![alt text](image-4.png)

IN JSX we cannot put Inline CSS like we do in HTML !! we need to give it object!!
As It is an Object so need to put inside `{}`
```jsx
import './RestuarantCard.css';

const RestuarantCard = () => {

    let styleCard={
        backgroundColor: "red"
    }
    return (
        <div className="res-card" style={styleCard}>
            <img src="https://www.cubesnjuliennes.com/wp-content/uploads/2023/12/Tawa-Paneer-Masala-1.jpg" alt=""/>
            <h3>food</h3>
        </div>
    )
}

export default RestuarantCard;

```

This is how we give inline CSS

![alt text](image-5.png)

This is we writing CSS inside JS!!

>Note:Inline styles is not recommended way of styling!!

we can also give inside style directly!! see two `{}` 1st one tell inside we have JS and 2nd tell that this is object!!

#### Body
```jsx

const Body = () => {
    return (
        <div className="body">
            <div className="search-bar"> Search bar</div>
            <div className="res">
               <div className="card"><RestuarantCard/></div>
                <div className="card"><RestuarantCard/></div>
                <div className="card"><RestuarantCard/></div>
                <div className="card"><RestuarantCard/></div>
                <div className="card"><RestuarantCard/></div>
                <div className="card"><RestuarantCard/></div>
                <div className="card"><RestuarantCard/></div>
                <div className="card"><RestuarantCard/></div>
                <div className="card"><RestuarantCard/></div>
                <div className="card"><RestuarantCard/></div>
                <div className="card"><RestuarantCard/></div>
            </div>
        </div>
    )
};

export default Body;
```
#### Restuarant card
```jsx
import './RestuarantCard.css';

const RestuarantCard = () => {

    return (
        <div className="res-card" style={{
        backgroundColor: "red"
    }}>
            <img src="https://www.cubesnjuliennes.com/wp-content/uploads/2023/12/Tawa-Paneer-Masala-1.jpg" alt=""/>
            <h3>food</h3>
        </div>
    )
}

export default RestuarantCard;

```

now we can chnage color it will look better !!

```css
.res-card:hover{
    cursor: pointer;
    border: 1px solid black;
}
```

when cursor hover over card cursor change to pointer and border will appear!!

![alt text](image-6.png)

now card is static ,we want dynamic data!!We can use props for that we know!!

## Dynamic data to each card (props)

props means properties!!

We know functional component is normal JS function!!`like that props are normal arguments to that function!!`

React takes all the argument passed and put it in object and pass to that component!!
###### Way-1
```jsx

import RestuarantCard from "./RestuarantCard.jsx";
import './Body.css';

let resturants=[
    {
        "name": "Spice Garden",
        "cuisines": ["Indian", "Tandoori"],
        "stars": 4.5,
        "ETA": 30
    },
    {
        "name": "Sushi Express",
        "cuisines": ["Japanese", "Sushi"],
        "stars": 4.2,
        "ETA": 25
    },
    {
        "name": "Bella Pasta",
        "cuisines": ["Italian", "Pasta", "Pizza"],
        "stars": 4.7,
        "ETA": 40
    },
    {
        "name": "Burger Hub",
        "cuisines": ["American", "Burgers"],
        "stars": 3.9,
        "ETA": 20
    },
    {
        "name": "Green Bowl",
        "cuisines": ["Healthy", "Salads"],
        "stars": 4.1,
        "ETA": 15
    },
    {
        "name": "Dragon Flame",
        "cuisines": ["Chinese", "Szechuan"],
        "stars": 4.4,
        "ETA": 35
    },
    {
        "name": "Taco Fiesta",
        "cuisines": ["Mexican", "Street Food"],
        "stars": 4.0,
        "ETA": 18
    },
    {
        "name": "The Vegan Bite",
        "cuisines": ["Vegan", "Gluten-Free"],
        "stars": 4.6,
        "ETA": 22
    },
    {
        "name": "Royal Biryani",
        "cuisines": ["Indian", "Biryani"],
        "stars": 4.3,
        "ETA": 28
    },
    {
        "name": "Kebab King",
        "cuisines": ["Middle Eastern", "Grill"],
        "stars": 4.2,
        "ETA": 32
    }
];

const Body = () => {
    return (
        <div className="body">
            <div className="search-bar"> Search bar</div>
            <div className="res">
                {resturants.map((restaurant, index) => (
                    <div className="card" key={index}>
                        <RestuarantCard data={restaurant} />
                    </div>
                ))}

            </div>
        </div>
    )
};

export default Body;
```

Note: we use map function for looping in React!!

```jsx
const RestuarantCard = (props) => {
    console.log(props)
    let styleCard={
        backgroundColor: "#f0f0f0"
    }
    return (
        <div className="res-card" style={styleCard}>
            <img src="https://www.cubesnjuliennes.com/wp-content/uploads/2023/12/Tawa-Paneer-Masala-1.jpg" alt=""/>
            <h3>{props.data.name}</h3>
            <h4>{props.data.cuisines}</h4>
            <h4>{props.data.stars} Stars</h4>
            <h4>{props.data.ETA} minutes</h4>
        </div>
    )
}
```

This is how parsed!!

#### Output 

![alt text](image-7.png)

This was way-1  now let us see way -2 of destructuring !! Now we see putting list data here as can see above ,thhis below is how we pass

###### Way-2

```jsx

const Body = () => {
    return (
        <div className="body">
            <div className="search-bar"> Search bar</div>
            <div className="res">
                {resturants.map((restaurant, index) => (
                    <div className="card" key={index}>
                        <RestuarantCard
                            name={restaurant.name}
                            cuisines={restaurant.cuisines}
                            stars={restaurant.stars}
                            ETA={restaurant.ETA}
                        />
                    </div>
                ))}

            </div>
        </div>
    )
};

export default Body;

```
Now below can see how we recieve 

```jsx
const RestuarantCard = ({ name, cuisines, stars, ETA } ) => {

    let styleCard={
        backgroundColor: "#f0f0f0"
    }
    return (
        <div className="res-card" style={styleCard}>
            <img src="https://www.cubesnjuliennes.com/wp-content/uploads/2023/12/Tawa-Paneer-Masala-1.jpg" alt=""/>
            <h3>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{stars} Stars</h4>
            <h4>{ETA} minutes</h4>
        </div>
    )
}

export default RestuarantCard;
```

Jsx passed as object and we just destructured it!! even in way-1 can do 

```jsx
{ name, cuisines, stars, ETA }=props 
```

way-2 do it implicitly!!!


>Note:Generally we have alot of data in JSON so we pass whole data at once like we did in way-1 and get from props.data!!So what data you are getting you can see by logging that log(props) and fetch out whatever you want!!!

Also you can detructure .data

```jsx
const { name, cuisines, stars, ETA }=props?.data;

```


In the Network tab of your browser’s Developer Tools (DevTools), "Fetch/XHR" refers to network requests made by your web application to retrieve or send data asynchronously — typically to and from a server or API.

🔹 What are XHR and Fetch?
1. XHR (XMLHttpRequest)
- Older way to make network requests in JavaScript.

- Used heavily in legacy apps and libraries like jQuery.

- Verbose API.

2. Fetch
- Modern JavaScript API for making HTTP requests.

- Cleaner syntax, based on Promises.

- Preferred in modern React/JS apps.


🔹 In the Network → Fetch/XHR tab, you'll see:

Column--	What It Means

Name--	Name/URL of the request.

Status--	HTTP response code (e.g., 200, 404, 500).

Type--	fetch, xhr, script, etc.

Initiator--	What triggered the request (e.g., a JS file or line of code).

Time--	How long the request took.

Size--	Size of the response payload.

![alt text](image-8.png)

## Config-driven UI!!

When UI is driven by Configs,it is config-driven UI!!

Some offers in bangalore ,some other in Delhi!! we do not have different websites !! Websites are driven by data!! drven by configs!! These configs come from Backend!e.g. Just different background colors based on different locations!!

>Note: A Good Frontend engineer must ask backend devloper why you are sending this data!!Data is very important for Frontend devloper!!

The above Restuarant card we created is config driven UI!! We get that many cards which we get from backend !! so depends on backend!!

### Warning 

`each child in list shiuld have a unique 'key' string`

```jsx

const Body = () => {
    return (
        <div className="body">
            <div className="search-bar"> Search bar</div>
            <div className="res">
                {resturants.map((restaurant) => (
                    <div className="card" >
                        <RestuarantCard
                            name={restaurant.name}
                            cuisines={restaurant.cuisines}
                            stars={restaurant.stars}
                            ETA={restaurant.ETA}
                        />
                    </div>
                ))}

            </div>
        </div>
    )
};

export default Body;

```

we need to tell each of items should be uniquely represented . `key` is reserved work!! for now we pass index!!

```jsx

const Body = () => {
    return (
        <div className="body">
            <div className="search-bar"> Search bar</div>
            <div className="res">
                {resturants.map((restaurant, index) => (
                    <div className="card" key={index}>
                        <RestuarantCard
                            name={restaurant.name}
                            cuisines={restaurant.cuisines}
                            stars={restaurant.stars}
                            ETA={restaurant.ETA}
                        />
                    </div>
                ))}

            </div>
        </div>
    )
};

export default Body;

```

>Note:so with map always give a key!!

If no key is given then React will need to re-render whole data!! but if you give unique id then react needs to render only that component!! so unique key important as need to identify each loop item!!It is big performance hit if you do not write it!!

>Note: React says never index as keys!! as if items change then index also chnage!!

>Note: If no id tehn ask backend to send ids!!Not using keys is not acceptable!! `Not using key(not accepted)  <<<<< index as key(can be used) <<<<<unique key (best)`


### Recursing On Children
By default, when recursing on the children of a DOM node, React just iterates over both lists of children at the same time and generates a mutation whenever there’s a difference.

For example, when adding an element at the end of the children, converting between these two trees works well:

```html
<ul>
  <li>first</li>
  <li>second</li>
</ul>

<ul>
  <li>first</li>
  <li>second</li>
  <li>third</li>
</ul>
```
React will match the two `<li>first</li>` trees, match the two `<li>second</li> `trees, and then insert the` <li>third</li>` tree.

If you implement it naively, inserting an element at the beginning has worse performance. For example, converting between these two trees works poorly:

```html
<ul>
  <li>Duke</li>
  <li>Villanova</li>
</ul>

<ul>
  <li>Connecticut</li>
  <li>Duke</li>
  <li>Villanova</li>
</ul>
```
React will mutate every child instead of realizing it can keep the `<li>Duke</li>` and `<li>Villanova</li>` subtrees intact. This inefficiency can be a problem.

#### Keys
In order to solve this issue, React supports a key attribute. When children have keys, React uses the key to match children in the original tree with children in the subsequent tree. For example, adding a key to our inefficient example above can make the tree conversion efficient:

```html
<ul>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>

<ul>
  <li key="2014">Connecticut</li>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>
```

Now React knows that the element with key '2014' is the new one, and the elements with the keys '2015' and '2016' have just moved.

In practice, finding a key is usually not hard. The element you are going to display may already have a unique ID, so the key can just come from your data:

```html
<li key={item.id}>{item.name}</li>
```
When that’s not the case, you can add a new ID property to your model or hash some parts of the content to generate a key. The key only has to be unique among its siblings, not globally unique.

As a last resort, you can pass an item’s index in the array as a key. This can work well if the items are never reordered, but reorders will be slow.

Reorders can also cause issues with component state when indexes are used as keys. Component instances are updated and reused based on their key. If the key is an index, moving an item changes it. As a result, component state for things like uncontrolled inputs can get mixed up and updated in unexpected ways.

### Tradeoffs
It is important to remember that the reconciliation algorithm is an implementation detail. React could rerender the whole app on every action; the end result would be the same. Just to be clear, rerender in this context means calling render for all components, it doesn’t mean React will unmount and remount them. `It will only apply the differences following the rules stated in the previous sections.`

We are regularly refining the heuristics in order to make common use cases faster. In the current implementation, you can express the fact that a subtree has been moved amongst its siblings, but you cannot tell that it has moved somewhere else. The algorithm will rerender that full subtree.

Because React relies on heuristics, if the assumptions behind them are not met, performance will suffer.

- The algorithm will not try to match subtrees of different component types. If you see yourself alternating between two component types with very similar output, you may want to make it the same type. In practice, we haven’t found this to be an issue.
- Keys should be stable, predictable, and unique. Unstable keys (like those produced by Math.random()) will cause many component instances and DOM nodes to be unnecessarily recreated, which can cause performance degradation and lost state in child components.