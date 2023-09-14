import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Section from "./Section/Section";

export const App = () => {
  return (
    <>
      <Section>
        <Header />
        <Hero />
        <Services />
      </Section>
    </>
  );
};
