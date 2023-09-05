import Popup from 'react-nexalib-popup';
import 'react-nexalib-popup/build/nexalib.popup.css';
import './App.css';

function App() {

    const popupConfig = {
    footerbutton: true,
    footerbuttontext: 'OK',
    color: '#000',
  };
    const assetpopupConfig = {
    footerbutton: false,
  };

  return (
    <div className="App">
      <h1>react-nexalib-popup</h1>
      
   <div className='content'>
    <div className='button_container'>
       <button popup-btn-1="true" class="button-55">Text Content</button>
       <button popup-btn-2="true" class="button-55">Image</button>
       <button popup-btn-3="true" class="button-55">Youtube</button>
       </div>
      
      <Popup targetItem="1" popupConfig={popupConfig}>
        <h1>This Is Heading</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vestibulum sem. Vestibulum ac iaculis mauris, eu tempor ante. Vestibulum vel dui convallis, pretium diam vitae, interdum augue. Praesent sed neque ut leo iaculis condimentum. Vestibulum ac risus ac nisl ullamcorper pellentesque vel at augue. Donec a elementum elit. Ut facilisis pulvinar velit, quis tempor orci convallis sed. Sed nisi lectus, pellentesque in lacinia non, viverra ut ipsum. Nunc aliquet sit amet orci vitae rhoncus. In nec est consectetur, consequat est et, pretium elit</p>
      </Popup>
      <Popup targetItem="2" popupConfig={assetpopupConfig}>
        <img src='./images.jpg' alt='nature'/>
      </Popup>
      <Popup targetItem="3" popupConfig={assetpopupConfig}>
      <iframe  title="Video Content" 
src="https://www.youtube.com/embed/CJIE1YK7sSU?si=ty-pTNtCxLPGfGnq">
</iframe>
      </Popup>
      </div>
    </div>
  );
}

export default App;
