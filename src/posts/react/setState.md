# setState


```js

export default class Demo2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    handleClick = () => {
        this.setState({ count: this.state.count + 1 })
        console.log(this.state.count)
        this.setState({ count: this.state.count + 1 })
        console.log(this.state.count)
        setTimeout(() => {
          this.setState({ count: this.state.count + 1 })
          console.log(this.state.count)
          this.setState({ count: this.state.count + 1 })
          console.log(this.state.count)
        }, 1000)
    }
    render() {
        return (
            <div>
                <h1>Demo2</h1>
                <button onClick={this.handleClick}>{this.state.count}</button>
            </div>
        )
    }
}

```

类组件 react18  显示结果是  0 0 1 1 

react18  显示结果是 0 0 2 3