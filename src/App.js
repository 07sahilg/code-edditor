import React,{Component} from 'react';
import fire from './fire.js'
import firebase from 'firebase'
import brace from 'brace';
import 'brace/mode/javascript';
import 'materialize-css/dist/css/materialize.min.css'
import 'brace/mode/java';
import 'brace/mode/python';
import 'brace/theme/monokai';
import M from 'materialize-css'
import AceEditor from 'react-ace'
var database=firebase.database()
class  App extends Component {
  state={
    code:'',
    mode:'java'
  }
  onChange=(newValue)=>{
    database.ref('editor').set({
      code:newValue
      })
    }
componentDidMount() {
   var select=document.getElementById("mode")
  this.setState({
    mode:select.value
  })  
     document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});
  });
  database.ref('editor').on('value',(snapshot)=>{
    this.setState({
      code:snapshot.val().code
    })
  })
}
  render(){
    return (
      <div>
       <div class="input-field col l3">
    <select >
      <option id="mode" value="1">java</option>
      <option id="mode" value="2">javascript</option>
      <option id="mode"value="3">python</option>
    </select>
  </div>
  <br/>

        <AceEditor
      mode="javascript" 
      theme="monokai"
      enableLiveAutocompletion={true}
       enableBasicAutocompletion={true}
       enableSnippets={true}
      value={this.state.code}
      onChange={this.onChange}
      name="UNIQUE_ID_OF_DIV"
      editorProps={{$blockScrolling: true}}/>

      </div>
    );
    
  }
  }
export default App;
