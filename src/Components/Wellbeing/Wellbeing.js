import Section from "../Section/Section";
import "../Wellbeing/Wellbeing.css";

const Wellbeing = () => {
  return (
    <div>
      <h1> WELLBEING </h1>
      <Section
        title="Wellbeing Advice"
        content= "If you are a person who remains busy in work and other matters and pays no attention to your health and wellbeing, you must take a break from the robotic routine and pick healthy habits. According to a psychologist, eating well and exercise gives your body and brain instant benefits of managing stress, depression, and anxiety. True wellbeing comes with balance, constant growth and acceptance."
        
        className="wellbeing-title"
      />
      <div className="wellbeing-content">
        <div className="wellbeing-links">
          <Section title="Overcoming Imposter Syndrome" 
          content={<a target="_blank" href="https://health.clevelandclinic.org/a-psychologist-explains-how-to-deal-with-imposter-syndrome/">IMPOSTER SYNDROME</a>}
           />
          <Section title="Managing Your Stress" 
          content={<a target="_blank" href="https://www.helpguide.org/articles/stress/stress-management.htm#:~:text=Effective%20stress%20management%20helps%20you,and%20meet%20challenges%20head%20on.">STRESS MANAGEMENT</a>}
          />
          <Section
            title="Becoming More Confident & Public Speaking"
            content={<a target="_blank" href="https://www.saintleo.edu/about/stories/blog/9-tips-improve-your-public-speaking-skills">CONFIDENCE & PUBLIC SPEAKING</a>}
          />
          <Section title="Asking For Help" 
          content={<a target="_blank" href="https://psyche.co/guides/how-to-ask-for-help-without-discomfort-or-apology">ASKING FOR HELP</a>}
           />
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
