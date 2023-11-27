// The following file contains the screen that shows all the available actions within a reading

import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import TextToSpeech from "./TextToSpeech";

const readingsList = [
  {
    id: "1",
    title:
      "Early in the 1980s, Bill Greenwood and a small band of rebel railroaders took on most of the top management of Burlington Northern and created a multibillion-dollar business in piggybacking rail services despite widespread resistance, even resentment, within the company. The Medical Products Group at Hewlett-Packard owes most of its leading performance to the remarkable efforts of Dean Morton, Lew Platt, Ben Holmes, Dick Alberting, and a handful of their colleagues who revitalized a health care business that most others had written off. At Knight-Ridder, Jim Batten's customer obsession vision took root at the Tallahassee Democrat when 14 frontline enthusiasts turned a charter to eliminate errors into a mission of major change and took the entire paper along with them. Such are the stories and the work of teams - real teams that perform, not amorphous groups that we call teams because we think that the label is motivating and energizing. The difference between teams that perform and other groups that don't is a subject to which most of us pay far too little attention. Part of the problem is that team is a word and concept so familiar to everyone. Or at least that's what we thought when we set out to do research for our book The Wisdom of Teams. We wanted to discover what differentiates various levels of team performance, where and how teams work best, and what top management can do to enhance their effectiveness. We talked with hundreds of people on more than 50 different teams in 30 companies and beyond, from Motorola and Hewlett-Packard to Operation Desert Storm and the Girl Scouts. We found that there is a basic discipline that makes teams work. We also found that teams and good performance are inseparable; you cannot have one without the other. But people use the word team so loosely that it gets in the way of learning and applying the discipline that leads to good performance. For managers to make better decisions about whether, when, or how to encourage and use teams, it is important to be more precise about what a team is and what it isn't. Most executives advocate teamwork. And they should. Teamwork represents a set of values that encourage listening and responding constructively to views expressed by others, giving others the benefit of the doubt, providing support, and recognizing the interests and achievements of others. Such values help teams perform, and they also promote individual performance as well as the performance of an entire organization. But teamwork values by themselves are not exclusive to teams, nor are they enough to ensure team performance. Nor is a team just any group working together. Committees, councils, and task forces are not necessarily teams. Groups do not become teams simply because that is what someone calls them. The entire work force of any large and complex organization is never a team, but think about how often that platitude is offered up. To understand how teams deliver extra performance, we must distinguish between teams and other forms of working groups. That distinction turns on performance results. A working group's performance is a function of what its members do as individuals. A team's performance includes both individual results and what we call collective work-products. A collective work-product is what two or more members must work on together, such as interviews, surveys, or experiments. Whatever it is, a collective work-product reflects the joint, real contribution of team members. Working groups are both prevalent and effective in large organizations where individual accountability is most important. The best working groups come together to share information, perspectives, and insights; to make decisions that help each person do his or her job better; and to reinforce individual performance standards. But the focus is always on individual goals and accountabilities. Working group members don't take responsibility for results other than their own. Nor do they try to develop incremental performance contributions requiring the combined work of two or more members.",
    screenName: "The Discipline of Teams",
  },
  {
    id: "2",
    title:
      "Snow plowing patterns seem an unlikely subject of a gender study conducted in a small town in Sweden. After all, the town’s approach appeared logical and neutral enough on the surface: plow major roads first, particularly those leading into and out of town, followed by smaller local streets. It is the same sequence played out in many cities around the world. As researchers dove into the subject, however, they discovered that male and female driving patterns were markedly different. While men mainly commuted to and from work, women drove all over to run errands and to take care of elderly family members. They also walked more, trudging across often-unplowed intersections, sometimes with kids in tow. Aside from health and safety, that labor, when tallied up, was found to be worth almost as much to the economy as paid work. This work contributes hugely to GDP, explains Caroline Criado Perez, author of Invisible Women: Data Bias in a World Designed for Men, a book about how women are often left out of design. In Sweden, the city council looked at the findings and reversed their approach, plowing side roads and sidewalks first. It had a huge impact, reducing the people admitted to emergency centers, women in particular, and had a corresponding economic impact from lower healthcare costs. Driving through a few inches, as it turned out, was less dangerous than walking through the snow, particularly if one was pushing something like a baby carriage as well.",
    screenName: "Invisible Women",
  },
  {
    id: "3",
    title:
      "1. Lay out the problem you want to solve.This may be easier said than done. Keeney describes a doctoral student who is at sea while trying to come up with a dissertation topic and advisor.  The student grasps for ideas with only the vaguest idea of a goal, stated as negatives rather than positives. I don’t think I could do it, it is not interesting to me, it seems too hard, and it would be too time consuming. Then finally someone suggests an idea that doesn’t have any of those negatives. The doctoral student grabs the topic. But Keeney says this is a poor way to make a major decision. Instead the student should keep pushing until they come up with at least five more alternatives, and then, considering all those, identify your objectives for your dissertation, evaluate the alternatives and select the best. It will be well worth the effort. 2. Identify the objectives of a possible solution. This is what Keeney did for the German energy company and what he’s done for several government agencies, including the Department of Homeland Security and the energy department. It’s not easy and it takes time but if you can approach your goals critically and hone in on what you want to achieve, your brainstorming session will be much more effective. Keeney offers a great example of this process. David Kelley, the founder of renowned design firm IDEO, wanted to design a product that would enable cyclists to transport and drink coffee while they were riding.  A couple of ways to describe what he wanted to design: spill-proof coffee cup lids, or bicycle cup holders.  But a much better description is the following objective: helping bike commuters to drink coffee without spilling it or burning their tongues.  Keeney likes this statement because it clearly lays out IDEO’s objectives, to help  bike commuters 1) drink coffee, 2) avoid spills, 3) not burn their tongues. He even contributes a few objectives of his own: avoid distractions while biking, don’t contribute to accidents, keep the coffee hot and minimize costs. Going into that much detail before  brainstorming about ways to design the cup holder makes IDEO much more likely to succeed. 3. Try to generate solutions individually. Before heading into a group brainstorming session, organizations should insist that staffers first try to come up with their own solutions. One problem with group brainstorming is that when we hear someone else’s solution to a problem, we tend to see it as what Keeney calls an anchor. In other words, we get stuck on that objective and potential solution to the exclusion of other goals. For instance, when Keeney was consulting with a cell phone maker years ago, the company had numerous objectives. It wanted to produce a lightweight phone that also had GPS capabilities (Keeney did this consulting gig some time ago, but he insists the example remains illustrative). When company executives got together to brainstorm ideas about how to build a better phone, one person brought up the issue of weight. Suddenly everyone became fixated on that idea and forgot about their other objectives. Coming into a meeting with potential solutions reduces the risk that participants will get bogged down on one objective. 4. Once you have gotten clear on your problems, your objectives and your personal solutions to the problems, work as a group. Though he acknowledges that it’s a challenge not to anchor on one solution in a brainstorming session, Keeney believes that if participants have done their homework, clarifying the problem, identifying objectives, and individually trying to come up with solutions, a brainstorming session can be extremely productive. At the end of the paper, he describes a 2008 workshop he held to try to come up with ways to improve evacuations in large buildings in case of a terrorist attack, based on a recommendation from the National Institute of Standards and Technology. Keeney brainstormed for two-and-a-half days with 30 people with expertise in everything from firefighting and building codes to handicapped people and human behavior. The result, after going through Keeney’s four-step process: a list of 300 new alternative ways to speed evacuation. Then the participants evaluated the many ideas, which included using cell phone alarms to guide people to exits and building linked sky bridges on every fifth floor. The hope, of course, is that these solutions will never be tested. But Keeney’s brainstorming method helped the group find effective suggestions.",
    screenName: "Successful Brainstorming",
  },
  {
    id: "4",
    title:
      "As in any good design process, we first had to align on the goals of critique. Only then could we understand and measure if our meetings were actually achieving what we needed. We decided on the following: Unblocking problems & generating ideas: Many times designers feel stuck on a problem after staring at it for too long, and find it helpful to leverage the broader team to move forward confidently. Other times you’re just getting started, and want to collect any ideas that your team may have already thought of. Elevating quality: Everything from visual design, to interaction details, or overall product direction. Encouraging consistency: We wanted to make sure we were leveraging existing patterns where possible, or flagging when there’s a need for a new one. Sharing context: Design teams are small enough to be in the unique position of having good context for what’s going on in the company. This allows people to identify overlaps and connections between projects that people in other roles might not have as much access to. Noticeably missing from this is: Making major product decisions or Determining product roadmaps. Design critiques are not the forum for that; teams should have separate roadmapping processes to determine direction. Critiques need to remain a safe space for exploration and feedback, independent from roadmap decision making and free from stress. Ultimately, critiques exist to help the designer/presenter—the person looking for support. In that way, it’s really up to them to utilize the best approach to accomplish that. The rest of the design team simply needs to commit to being present and ready to help.",
    screenName: "Design Critiques at Figma",
  },
];

const ReadingsOverview = ({ route, navigation }) => {
  const { readingName } = route.params;
  useEffect(() => {
    navigation.setOptions({ title: readingName });
  }, [readingName, navigation]);

  const selectedReading = readingsList.find(
    (item) => item.screenName === readingName
  );

  return (
    <View style={styles.container}>
      <Text style={styles.TitleText}>{readingName}</Text>
      <TextToSpeech passedData={selectedReading.title}></TextToSpeech>
      <ScrollView style={styles.textbox}>
        <Text style={styles.text}>{selectedReading.title}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
  },
  textbox: {
    width: 350,
    margin: 7,
    borderColor: "black",
    borderRadius: 10,
    borderWidth: 2,
  },
  text: {
    fontSize: 18,
    fontFamily: "Arial",
    marginHorizontal: 15,
    marginVertical: 10,
    position: "relative",
  },
  TitleText: {
    fontSize: 35,
    fontWeight: "bold",
    fontFamily: "Georgia",
    marginHorizontal: 15,
    marginVertical: 10,
    textAlign: "center",
  },
  new: {
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    flex: 1,
  },
});

export default ReadingsOverview;
