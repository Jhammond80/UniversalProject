// // Button.js
import React from 'react';

const Button = ({ onClick, text }) => {
    return (
        <button className='table-button' onClick={onClick}>
        {text}
        </button>
    );
};

export default Button;





// Button.js
// import React from 'react';

// const Button = ({ onClick, texts, location, project }) => {
//     return (
//         <>
//         {texts.map((text, index) => (
//             ((location.pathname === '/' && index !== 2) || (location.pathname === `/project/${project._id}/details` && index !== 0)) && (
//             <button key={index} className='table-button' onClick={() =>onClick(index)}>
//                 {text}
//             </button>
//             )
//         ))}
//         </>
//     );
// };

// export default Button;

// Button.js
// Button.js
// import React from 'react';

// const Button = ({ onDelete ,onClick, texts, location, project }) => {
//     return (
//         <>
//         {texts.map((text, index) => (
//             ((location.pathname === '/' && index !== 2) || 
//             (location.pathname === `/project/${project._id}/details` && index !== 0) ||
//             (location.pathname === `/project/${project._id}/details` && index === 1)) && (
//                 <button key={index} className='table-button' onClick={() => onClick(text)}>
//                 {text}
//                 </button>
//             )
//         ))}
//         </>
//     );
// };

// const Button = ({ onDelete, onClick, texts, location, project }) => {
//     return (
//         <>
//             {texts.map((text, index) => (
//             (location.pathname === '/' && index !== 2) || (location.pathname === `/project/${project._id}/details` && (text === 'Update' || text === 'Delete')) && (
//                 <button key={index} className='table-button' onClick={() => onClick(text)}>
//                 {text}
//                 </button>
//             )
//             ))}
//         </>
//         );
//     };
    

// export default Button;
