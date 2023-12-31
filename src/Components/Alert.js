import React from 'react'

export default function Alert(props) {
    const capatalize=(word)=>{
        if(word==='danger'){
          word='error';
        }
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
  return (
    props.alert&& <div className={`alert fixed-top alert-${props.alert.type} alert-dismissible fade show`} role="alert" style={{marginTop:"3rem"}}>
        <strong>{capatalize(props.alert.type)} :</strong>{props.alert.msg}
    </div>
  )
}
