const root = ReactDOM.createRoot(document.getElementById('root'))

function Card() {
  return <section>
      <Image/>
      <br/>
      <Header/>
      <Text/>
      <Button/>
      <br/>
      <br/>
      <Image/>
      <br/>
      <Header/>
      <Text/>
      <Button/>
    </section>
}

function Header() {
  return <h2>This is a header</h2>
}

function Image() {
  return <img src="https://placekitten.com/g/200/300"></img>
}

function Text() {
  return <h4>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec quis nibh at felis congue commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam ornare wisi eu metus.</h4>
}

function Button() {
  return <button>Button</button>
}

root.render(<Card/>)