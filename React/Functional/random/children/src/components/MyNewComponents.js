import React from 'react';
    
const MyNewComponent = (props) => {
    return(
        <div>
            { props.children } 
            {/* so this is a comment */}
            {/* the children are passed into the form and when when
            we go into the App.js whatever is in the html tags
            will represent different types of children. */}
            <h1>
                { props.header }
                {/* So this references the header which is 
                controlled in the header preface when we 
                call the component tag. since its called
                after the children however, it gives an 
                appearance you might not expect. */}
            </h1>
        </div>
    );
}
    
export default MyNewComponent;