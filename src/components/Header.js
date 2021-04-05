import PropsTypes from 'prop-types'

import Button from './Button'

const Header = ({title}) => {
  const onClick=()=>{
    console.log('click form parent ');
    }
  return (
    <header className="header">
    <h1 style={{ textAlign:'center' }}> { title } </h1>
    <Button color="green" text="Add New"  onClick={onClick}/>
    
    </header>
  );
};
//props validation 
Header.propTypes={
  title:PropsTypes.string
}

// default props 
Header.defaultProps={
  title:'by default'
}
export default Header