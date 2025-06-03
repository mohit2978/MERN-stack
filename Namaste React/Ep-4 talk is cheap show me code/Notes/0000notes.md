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