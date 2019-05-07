export const codeBlock01 = `const title = <div>This is my Title,!</div> // JSX syntax`.trim()
export const codeBlock02 = `this.state.variableName // access variable in component state`.trim()
export const codeBlock03 = `//Incorrect
    this.state.userId = 43;
//Correct 
    this.setState({userId: 43})`.trim()

export const codeBlock04 = `//example of callback
        this.setState({userId: 43}, () => {
      //do something with new value of userId
    })`.trim()
export const codeBlock05 = `Class MyComponent extends React.Component {
    render(){
      return <Img src = 'pic.png'/>
     }
   }`.trim()

export const codeBlock06 = `class UserInfo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
       userName:"JohnDoe",
       userId:"123"
      };
    }
  //Assume fetchUserData is function which gets data from a server and returns a promise
    componentDidMount() {
      fetchUserData.then(function(response){
       //update userName and userId in state with response from server  
     })                           
    }
    render() {
      return (
        <div>
          <h1> UserName: {this.state.userName}</h1>
          <h1> User ID: {this.state.userId}</h1>      
       </div>
      );
    }
  }`.trim()

export const codeBlock07 = `.....
  ComponentDidUpdate(prevProps, prevState){
  //always compare previous props with new props
     if(prevProps.userId !== this.props.userId) {
  //do something with the new value of userId
    }
  }`.trim()

export const codeBlock08 = `componentDidMount() {
    this.interval = setInterval(
      () => // call a function,
      1000
    );
  }
 componentWillUnmount() {
  //clear interval  
  clearInterval(this.interval); 
 }`.trim()

export const codeBlock09 = `//functional component that returns a simple div with text in it.
     function HelloWorld(props) {
  return (
     <div>Hello World ,!</div>
   )
 }`.trim()

export const codeBlock10 = `
 //class component that returnsa simple div with text in it.
    Class HelloWorld extends React.Component {
 render(){ 
  return <div>Hello World ,!</div>
}
 `
