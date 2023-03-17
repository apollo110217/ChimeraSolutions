import {
  ProjectContainer,
  VisionSection,
  Container,
  VisionText,
  SecondSection,
  Line,
  ConetentText,
  ImgGallary,
  Vision2Section,
  ThirdSectionContent,
  Vision3Section,
  VisionText1
} from "../../styles/projects.style"

import {
  AskUsArea,
  AskUsDesc,
  AskUsText,
  ContactArea,
  ContactDesc,
  DescribeTxt,
  FifthSection,
  LineTop,
  TeamContext, TeamHeadTxt, TeamHeadView, TeamSkillView
} from "../../styles/product.style"

export default function Project() {
  return (
    <ProjectContainer>
      <TeamContext>
        <TeamHeadView>
          <TeamHeadTxt>Projects</TeamHeadTxt>
          <TeamSkillView>
            <DescribeTxt>Innovation</DescribeTxt>
            <DescribeTxt>Consistency</DescribeTxt>
            <DescribeTxt>Quality</DescribeTxt>
          </TeamSkillView>
        </TeamHeadView>
      </TeamContext>
      <VisionSection>
        <Container>
          <VisionText>Computer<br /> Vision</VisionText>
        </Container>
      </VisionSection>
      <SecondSection>
        <Container>
          <Line></Line>
          <ConetentText>Object detection, image processing and segmentation tasks, from agriculture to construction surveillance, you can count on our expertise.
            We are working with companies to optimize and automatize their workflows with using the lastest and most suitable computer vision techniques from classical methods to the SoTA.</ConetentText>
          <ImgGallary>
            <img src="assets/projects/image 55.png" alt="" />
            <img src="assets/projects/strabag.png" alt="" />
            <img src="assets/projects/ineton.png" alt="" />
            <img src="assets/projects/image 58.png" alt="" />
          </ImgGallary>
        </Container>
      </SecondSection>
      <Vision2Section>
        <Container>
          <VisionText>Machine<br /> Learning &<br /> Data<br /> Science</VisionText>
        </Container>
      </Vision2Section>
      <SecondSection>
        <Container>
          <Line></Line>
          <ThirdSectionContent>
            <ConetentText style={{ display: "flex", flexDirection: "column", rowGap: "40px" }}>
              <div>Partnership in neural network model enhancement with OMNet++.
                We could reach over 10x speed improvements.
                We also presented our result on their conference at
                OMNeT++ 2022 Summit.
              </div>
              <div>Summit website:  https://summit.omnetpp.org/2022/index.html</div>
              <div>
                Presentation slides:
                https://docs.google.com/presentation/d/16strtgl22lZ4h5NvLQ1CsVDVP6sf2GAEW_FWtqnhfpM/edit
              </div>
            </ConetentText>
            <img src="assets/projects/pink.png" alt="" />
          </ThirdSectionContent>
        </Container>
      </SecondSection>
      <Vision3Section>
        <Container>
          <VisionText1>Software<br /> Architectural<br /> Design</VisionText1>
        </Container>
      </Vision3Section>
      <SecondSection>
        <Container>
          <Line />
          <ConetentText>With our software architectural design services, you can be confident that your software will meet your organization's needs and provide a solid foundation for your business to grow and evolve over time. Contact us today to learn more about how our software architectural design services can benefit your organization and help you achieve your business goals.</ConetentText>
        </Container>
      </SecondSection>
      <FifthSection>
        <Container>
          <LineTop></LineTop>
          <AskUsArea>
            <AskUsText>ASK US</AskUsText>
            <AskUsDesc>
              <p>Interested?</p>
              <p>Request Consultation</p>
            </AskUsDesc>
          </AskUsArea>
          <AskUsArea>
            <AskUsText>CONTACT</AskUsText>
            <ContactDesc>info@chimerasolutions.ai</ContactDesc>
          </AskUsArea>
          <ContactArea>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <textarea name="" id="textarea" cols={30} rows={15} placeholder="Text"></textarea>
            <button>Message</button>
          </ContactArea>
        </Container>
      </FifthSection>
    </ProjectContainer>
  );
}