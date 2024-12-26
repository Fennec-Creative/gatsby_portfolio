import React from "react";

const FeatureBreakdownAxil = () => {
  return (
    <section className="serv-block section-padding min-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 mb-30">
              <h2 className="s-head mb-60 center-small">Feature Breakdown</h2>
            </div>
          </div>

          <div className="row mb-100">
            <div className="col-lg-4 offset-lg-2">
              <h4 className="mb-20 center-small">Foundations </h4>
              <p className="mb-20">
              I started with a <strong>minimalist foundation</strong> and a strong focus on usability. 
              </p>
              <p className="mb-20">
              My intent was to set users up for success by <strong>minimizing complexity</strong> up front and reinforcing what matters the most. 
              </p>
              <p className="mb-20">
              I chose <strong>Nunito</strong> as my font because it is highly readable and has a friendly appearance. 
              </p>
            </div>
            <div className="col-lg-4 offset-rg-2">
              <img src="/img/case-studies/axil-foundations.png" alt="View of typography, spacing, and elevation" />
            </div>
          </div>

          <div className="row mb-100">
            <div className="col-lg-4 offset-lg-2">
              <h4 className="mb-20 center-small">Optimized Components</h4>
              <p className="mb-20">
              To support rapid-prototyping and reduce cognitive load, I optimized my components using <strong>Figma’s variant system</strong>. 
              </p>
              <p className="mb-20">
              I created a <strong>single component</strong> for each element type (button, slider, chip, etc) and nested all sizes, states, and other custom features as variants.
              </p>
            </div>
            <div className="col-lg-6 center-small">
              <img src="/img/case-studies/axil-optimized-components.png" alt="image" className="Full-width button and icon-only button share the same component" />
            </div>
          </div>

          <div className="row mb-100">
            <div className="col-lg-4 offset-lg-2">
              <h4 className="mb-20 center-small">Future-proofing</h4>
              <p className="mb-20">
              To make Axil adaptable, I created <strong>separate foundational instances</strong> for colors and elements that are commonly subject to change. 
              </p>
              <p className="mb-20">
              I then went in and optimized each of my components so that it could be <strong>easily customized</strong> and changed. This made the system adaptable while presenting as little complexity up front as possible.
              </p>
            </div>
            <div className="col-lg-4 offset-rg-2">
              <img src="/img/case-studies/axil-future-proofing.png" alt="design system colors and states" />
            </div>
          </div>

          <div className="row mb-100">
            <div className="col-lg-4 offset-lg-2">
              <h4 className="mb-20 center-small">Wireframe Mode</h4>
              <p className="mb-20">
              To <strong>add efficiency</strong> to the design process, I provided a “wireframe” version for each of my components. 
              </p>
              <p className="mb-20">
              This trick allowed designers to <strong>quickly build wireframes</strong> without having to seek out additional libraries. It also helped designers to quickly jump between the wire-framing and high-fi stages of design. 
              </p>
              </div>
            <div className="col-lg-4 offset-rg-2 text-center">
              <img src="/img/case-studies/axil-wireframe-mode.png" alt="wireframe mode example" className="img-width-small"/>
            </div>
          </div>

          <div className="row mb-100">
            <div className="col-lg-4 offset-lg-2">
              <h4 className="mb-20 center-small">Naming Conventions</h4>
              <p className="mb-20">
              I named and organized my components using <strong>Order of Operations logic</strong>.  
              </p>
              <p className="mb-20">
              To keep this simple and ease the translation of components to tokens, I used <strong>lower case</strong> for all component names. 
              </p>
              </div>
            <div className="col-lg-4 offset-rg-2 text-center">
              <img src="/img/case-studies/axil-naming-conventions.png" alt="order of operations is category, component, type, variant, than state" className="img-width-small"/>
            </div>
          </div>

          <div className="row mb-100">
            <div className="col-lg-4 offset-lg-2">
              <h4 className="mb-20 center-small">Accessibility</h4>
              <p className="mb-20">
              Throughout Axil I included <strong>accessibility notes</strong> with links to external documents. 
              </p>
              <p className="mb-20">
              I added these to help <strong>train new users</strong> and reinforce the importance of accessibility.
              </p>
              </div>
            <div className="col-lg-4 offset-rg-2 text-center">
              <img src="/img/case-studies/axil-accessibility-section.png" alt="Example of accessibility indicators" className="img-width-medium"/>
            </div>
          </div>

          <div className="row mb-100">
            <div className="col-lg-4 offset-lg-2">
              <h4 className="mb-20 center-small">Basic documentation </h4>
              <p className="mb-20">
              I included basic documentation for <strong>design system use</strong> and <strong>token implementation</strong>. 
              </p>
              <p className="mb-20">
              I added these to help <strong>train new users</strong> and reinforce the importance of accessibility.
              </p>
              </div>
            <div className="col-lg-4 offset-rg-2 text-center">
              <img src="/img/case-studies/axil-basic-documentation.png" alt="Getting started documentation for new users" className="img-width-medium"/>
            </div>
          </div>

          <div className="row mb-100">
            <div className="col-lg-4 offset-lg-2">
              <h4 className="mb-20 center-small">Token System </h4>
              <p className="mb-20">
              I included documentation for token creation and implementation using the <strong>Figma Tokens</strong> plugin.
              </p>
              <p className="mb-20">
              This gave users a brief introduction to tokens with a step-by-step breakdown of how to install the plugin and begin implementation. 
              </p>
              </div>
            <div className="col-lg-4 offset-rg-2 text-center">
              <img src="/img/case-studies/axil-token-system.png" alt="Example of token system organized by value, core, alias, then component" className="img-width-small"/>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 offset-lg-2">
              <h4 className="mb-20 center-small">Feedback is Golden</h4>
              <p className="mb-20">
              Developer feedback to paramount for a successful implementation.
              </p>
              <p >
              I included a <strong>feedback system</strong> with friendly instructions that encouraged developers and other stakeholders to leave feedback. 
              </p>
              </div>
            <div className="col-lg-4 offset-rg-2 text-center">
              <img src="/img/case-studies/axil-feedback.png" alt="Example of feedback form" className="img-width-small"/>
            </div>
          </div>

        </div>
      </section>
  ); 
};

export default FeatureBreakdownAxil;
