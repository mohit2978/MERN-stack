Now in today's class we create a nav bar!!

 we use flex to create nav bar we know!!


```javascript

      function Header() {
        return (
          <div class="header">
            <div class="leftPanel flexContainer">
              <h1>First-Page-In-React</h1>
            </div>
            <div class="rightPanel flexContainer">
              <a href="">Home </a>
              <a href="">Profile </a>
              <a href="">Products </a>
              <a href="">ContactUs </a>
              <a href="">Login </a>
            </div>
          </div>
        );
      }
```


flex-items are in row direction we know!!

in nav-bar2 we created another nav-bar

in js we follow camelCase to add CSS

```javascript
   function App() {
        const containerStyle = {
          display: "flex",
          justifyContent: "space-evenly",
        };
        return (
          <div style={containerStyle}>
            <CreateUI
              url="https://rukminim2.flixcart.com/flap/96/96/image/29327f40e9c4d26b.png?q=100"
              title="Grocery"
            />
            <CreateUI
              url="https://rukminim2.flixcart.com/flap/96/96/image/22fddf3c7da4c4f4.png?q=100"
              title="Mobiles"
            />
            <CreateUI
              url="https://rukminim2.flixcart.com/fk-p-flap/100/100/image/7a5c9b23fa14cfd3.jpg?q=50"
              title="Fashion"
            />
            <CreateUI
              url="https://rukminim2.flixcart.com/flap/96/96/image/71050627a56b4693.png?q=100"
              title="Travel"
            />
            <CreateUI
              url="https://rukminim2.flixcart.com/flap/96/96/image/29327f40e9c4d26b.png?q=100"
              title="Grocery"
            />
            <CreateUI
              url="https://rukminim2.flixcart.com/flap/96/96/image/22fddf3c7da4c4f4.png?q=100"
              title="Mobiles"
            />
            <CreateUI
              url="https://rukminim2.flixcart.com/fk-p-flap/100/100/image/7a5c9b23fa14cfd3.jpg?q=50"
              title="Fashion"
            />
            <CreateUI
              url="https://rukminim2.flixcart.com/flap/96/96/image/71050627a56b4693.png?q=100"
              title="Travel"
            />
          </div>
        );
      }
```
here we put justifyContent as camelcase in React but in CSS we put justify-content!!

CreateUI is calling this function

```javascript
    <script type="text/babel">
      function CreateUI(props) {
        return (
          <div>
            <img src={props.url} width="70" height="70" />
            <p>{props.title} </p>
          </div>
        );
      }
```


