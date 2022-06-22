import Section from "../Section/Section";
import "../Wellbeing/Wellbeing.css";

const Wellbeing = () => {
  return (
    <div>
      <h1> WELLBEING </h1>
      <Section
        title="Wellbeing Advice"
        content={
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        className="wellbeing-title"
      />
      <div className="wellbeing-content">
        <div className="wellbeing-links">
          <Section title="Overcoming Imposter Syndrome" content="some links" />
          <Section title="Managing Your Stress" content="some links" />
          <Section
            title="Becoming More Confident & Public Speaking"
            content="some links"
          />
          <Section title="Asking For Help" content="some links" />
        </div>
        <img
          src="https://www.zakariamasjid.org.uk/wp-content/uploads/2020/04/improve-mental-wellbeing-at-work-_2640x1980_acf_cropped-1440x1080.jpg"
          alt="test"
        />
      </div>
    </div>
  );
};

export default Wellbeing;
