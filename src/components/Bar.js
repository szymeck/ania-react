import React from 'react';





function Bar({title}){
  return (
    <section class="bar">
      <div class="container">
        <div class="row">
          <div class="row-text">
            <h1>{title}</h1>
          </div>
          <div class="elem-8">
          <img src="./elem-8.svg" alt=""></img>
        </div>
        <div class="elem-9">
          <img src="./elem-9.svg" alt=""></img>
        </div>
      
        </div>
      </div>
      
    </section>
  );
};
  
export default Bar;