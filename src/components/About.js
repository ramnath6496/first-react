import React from 'react'

export default function About(props) {
  return (
    <div className='container my-3'>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className={`accordion-button fw-medium text-bg-${props.mode}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Analyze your Text</button>
          </h2>
          <div id="collapseOne" className={`accordion-collapse collapse text-${props.mode === "light" ? "dark" : "light"} bg-${props.mode === "dark" ? "secondary" : "white"} show`} data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p>This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <strong>.accordion-body</strong>, though the transition does limit overflow.</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className={`accordion-button fw-medium text-bg-${props.mode} collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Free to Use</button>
          </h2>
          <div id="collapseTwo" className={`accordion-collapse collapse text-${props.mode === "light" ? "dark" : "light"} bg-${props.mode === "dark" ? "secondary" : "white"}`} data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p>This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <strong>.accordion-body</strong>, though the transition does limit overflow.</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className={`accordion-button fw-medium text-bg-${props.mode} collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Browser Compatible</button>
          </h2>
          <div id="collapseThree" className={`accordion-collapse collapse text-${props.mode === "light" ? "dark" : "light"} bg-${props.mode === "dark" ? "secondary" : "white"}`} data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p>This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <strong>.accordion-body</strong>, though the transition does limit overflow.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
