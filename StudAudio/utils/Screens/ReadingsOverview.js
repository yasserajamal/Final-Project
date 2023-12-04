// The following file contains the screen that shows all the available actions within a reading

import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import TextToSpeech from "./TextToSpeech";

const readingsList = [
  {
    id: "1",
    title:
      "Early in the 1980s, Bill Greenwood and a small band of rebel railroaders took on most of the top management of Burlington Northern and created a multibillion-dollar business in piggybacking rail services despite widespread resistance, even resentment, within the company. The Medical Products Group at Hewlett-Packard owes most of its leading performance to the remarkable efforts of Dean Morton, Lew Platt, Ben Holmes, Dick Alberting, and a handful of their colleagues who revitalized a health care business that most others had written off. At Knight-Ridder, Jim Batten's customer obsession vision took root at the Tallahassee Democrat when 14 frontline enthusiasts turned a charter to eliminate errors into a mission of major change and took the entire paper along with them. Such are the stories and the work of teams - real teams that perform, not amorphous groups that we call teams because we think that the label is motivating and energizing. The difference between teams that perform and other groups that don't is a subject to which most of us pay far too little attention. Part of the problem is that team is a word and concept so familiar to everyone. Or at least that's what we thought when we set out to do research for our book The Wisdom of Teams. We wanted to discover what differentiates various levels of team performance, where and how teams work best, and what top management can do to enhance their effectiveness. We talked with hundreds of people on more than 50 different teams in 30 companies and beyond, from Motorola and Hewlett-Packard to Operation Desert Storm and the Girl Scouts. We found that there is a basic discipline that makes teams work. We also found that teams and good performance are inseparable; you cannot have one without the other. But people use the word team so loosely that it gets in the way of learning and applying the discipline that leads to good performance. For managers to make better decisions about whether, when, or how to encourage and use teams, it is important to be more precise about what a team is and what it isn't. Most executives advocate teamwork. And they should. Teamwork represents a set of values that encourage listening and responding constructively to views expressed by others, giving others the benefit of the doubt, providing support, and recognizing the interests and achievements of others. Such values help teams perform, and they also promote individual performance as well as the performance of an entire organization. But teamwork values by themselves are not exclusive to teams, nor are they enough to ensure team performance. Nor is a team just any group working together. Committees, councils, and task forces are not necessarily teams. Groups do not become teams simply because that is what someone calls them. The entire work force of any large and complex organization is never a team, but think about how often that platitude is offered up. To understand how teams deliver extra performance, we must distinguish between teams and other forms of working groups. That distinction turns on performance results. A working group's performance is a function of what its members do as individuals. A team's performance includes both individual results and what we call collective work-products. A collective work-product is what two or more members must work on together, such as interviews, surveys, or experiments. Whatever it is, a collective work-product reflects the joint, real contribution of team members. Working groups are both prevalent and effective in large organizations where individual accountability is most important. The best working groups come together to share information, perspectives, and insights; to make decisions that help each person do his or her job better; and to reinforce individual performance standards. But the focus is always on individual goals and accountabilities. Working group members don't take responsibility for results other than their own. Nor do they try to develop incremental performance contributions requiring the combined work of two or more members.",
    screenName: "THE DISCIPLINE OF TEAMS",
  },
  {
    id: "2",
    title:
      "Snow plowing patterns seem an unlikely subject of a gender study conducted in a small town in Sweden. After all, the town’s approach appeared logical and neutral enough on the surface: plow major roads first, particularly those leading into and out of town, followed by smaller local streets. It is the same sequence played out in many cities around the world. As researchers dove into the subject, however, they discovered that male and female driving patterns were markedly different. While men mainly commuted to and from work, women drove all over to run errands and to take care of elderly family members. They also walked more, trudging across often-unplowed intersections, sometimes with kids in tow. Aside from health and safety, that labor, when tallied up, was found to be worth almost as much to the economy as paid work. This work contributes hugely to GDP, explains Caroline Criado Perez, author of Invisible Women: Data Bias in a World Designed for Men, a book about how women are often left out of design. In Sweden, the city council looked at the findings and reversed their approach, plowing side roads and sidewalks first. It had a huge impact, reducing the people admitted to emergency centers, women in particular, and had a corresponding economic impact from lower healthcare costs. Driving through a few inches, as it turned out, was less dangerous than walking through the snow, particularly if one was pushing something like a baby carriage as well.",
    screenName: "INVISIBLE WOMEN",
  },
  {
    id: "3",
    title:
      "1. Lay out the problem you want to solve.This may be easier said than done. Keeney describes a doctoral student who is at sea while trying to come up with a dissertation topic and advisor.  The student grasps for ideas with only the vaguest idea of a goal, stated as negatives rather than positives. I don’t think I could do it, it is not interesting to me, it seems too hard, and it would be too time consuming. Then finally someone suggests an idea that doesn’t have any of those negatives. The doctoral student grabs the topic. But Keeney says this is a poor way to make a major decision. Instead the student should keep pushing until they come up with at least five more alternatives, and then, considering all those, identify your objectives for your dissertation, evaluate the alternatives and select the best. It will be well worth the effort. 2. Identify the objectives of a possible solution. This is what Keeney did for the German energy company and what he’s done for several government agencies, including the Department of Homeland Security and the energy department. It’s not easy and it takes time but if you can approach your goals critically and hone in on what you want to achieve, your brainstorming session will be much more effective. Keeney offers a great example of this process. David Kelley, the founder of renowned design firm IDEO, wanted to design a product that would enable cyclists to transport and drink coffee while they were riding.  A couple of ways to describe what he wanted to design: spill-proof coffee cup lids, or bicycle cup holders.  But a much better description is the following objective: helping bike commuters to drink coffee without spilling it or burning their tongues.  Keeney likes this statement because it clearly lays out IDEO’s objectives, to help  bike commuters 1) drink coffee, 2) avoid spills, 3) not burn their tongues. He even contributes a few objectives of his own: avoid distractions while biking, don’t contribute to accidents, keep the coffee hot and minimize costs. Going into that much detail before  brainstorming about ways to design the cup holder makes IDEO much more likely to succeed. 3. Try to generate solutions individually. Before heading into a group brainstorming session, organizations should insist that staffers first try to come up with their own solutions. One problem with group brainstorming is that when we hear someone else’s solution to a problem, we tend to see it as what Keeney calls an anchor. In other words, we get stuck on that objective and potential solution to the exclusion of other goals. For instance, when Keeney was consulting with a cell phone maker years ago, the company had numerous objectives. It wanted to produce a lightweight phone that also had GPS capabilities (Keeney did this consulting gig some time ago, but he insists the example remains illustrative). When company executives got together to brainstorm ideas about how to build a better phone, one person brought up the issue of weight. Suddenly everyone became fixated on that idea and forgot about their other objectives. Coming into a meeting with potential solutions reduces the risk that participants will get bogged down on one objective. 4. Once you have gotten clear on your problems, your objectives and your personal solutions to the problems, work as a group. Though he acknowledges that it’s a challenge not to anchor on one solution in a brainstorming session, Keeney believes that if participants have done their homework, clarifying the problem, identifying objectives, and individually trying to come up with solutions, a brainstorming session can be extremely productive. At the end of the paper, he describes a 2008 workshop he held to try to come up with ways to improve evacuations in large buildings in case of a terrorist attack, based on a recommendation from the National Institute of Standards and Technology. Keeney brainstormed for two-and-a-half days with 30 people with expertise in everything from firefighting and building codes to handicapped people and human behavior. The result, after going through Keeney’s four-step process: a list of 300 new alternative ways to speed evacuation. Then the participants evaluated the many ideas, which included using cell phone alarms to guide people to exits and building linked sky bridges on every fifth floor. The hope, of course, is that these solutions will never be tested. But Keeney’s brainstorming method helped the group find effective suggestions.",
    screenName: "SUCCESSFULL BRAINSTORMING",
  },
  {
    id: "4",
    title:
      "As in any good design process, we first had to align on the goals of critique. Only then could we understand and measure if our meetings were actually achieving what we needed. We decided on the following: Unblocking problems & generating ideas: Many times designers feel stuck on a problem after staring at it for too long, and find it helpful to leverage the broader team to move forward confidently. Other times you’re just getting started, and want to collect any ideas that your team may have already thought of. Elevating quality: Everything from visual design, to interaction details, or overall product direction. Encouraging consistency: We wanted to make sure we were leveraging existing patterns where possible, or flagging when there’s a need for a new one. Sharing context: Design teams are small enough to be in the unique position of having good context for what’s going on in the company. This allows people to identify overlaps and connections between projects that people in other roles might not have as much access to. Noticeably missing from this is: Making major product decisions or Determining product roadmaps. Design critiques are not the forum for that; teams should have separate roadmapping processes to determine direction. Critiques need to remain a safe space for exploration and feedback, independent from roadmap decision making and free from stress. Ultimately, critiques exist to help the designer/presenter—the person looking for support. In that way, it’s really up to them to utilize the best approach to accomplish that. The rest of the design team simply needs to commit to being present and ready to help.",
    screenName: "DESIGN CRITIQUES",
  },
  {
    id: "5",
    title:
      "The new concepts we introduce in matrix algebra are of two types: algebraic and geometric. In Chapter 19 we introduce the algebraic notion of linear independence (a useful way of expressing that a collection of vectors has no redundancy) and the related geometric algorithm called the Gram–Schmidt process. This algorithm is a generalization of the higher-dimensional Pythagorean Theorem (Theorem 2.3.1), and it solves the puzzle (which arises whenever trying to use the method in Theorem 6.2.1 to compute projections to a subspace of dimension ≥ 2) of how to build an orthogonal basis of a general linear subspace of Rn. It is also pervasive in applications of linear algebra (e.g., the QR-decomposition in Chapter 22), as well as in the arguments in the first section of the optional Appendix B that justify many intuitive expectations about dimension (which we stated in earlier parts of this book and have used throughout). For example, the Gram–Schmidt process provides us with a systematic way of determining when the span of a given collection of k nonzero n-vectors has dimension equal to k (rather than < k). In Chapter 20 we introduce and explore the algebraic notion of matrix transpose and use it to define the distinguished algebraic class of symmetric n × n matrices as well as describe the distinguished geometric class of orthogonal linear transformations Rn → Rn, each of which plays a role later in the book. For instance, properties of symmetric matrices underlie the multivariable second derivative test in Chapter 26, and the geometry of orthogonal transformations underlies the singular value decomposition (SVD) (a special case of which is called principal component analysis (PCA)) in Section 27.3. The implementation of SVD has important applications in many fields: robotics, gene expression analysis, machine learning, image compression, web search, quantum information, . . . .  In Chapter 20 we also introduce the algebraic concept of quadratic form, which arises naturally in the study of energy for physical systems with many parts and whose connection to symmetric matrices will be important for understanding both the multivariable second-derivative test as well as SVD.",
    screenName: "FURTHER MATRIX ALGEBRA",
  },
  {
    id: "6",
    title:
      "Chapter 13 introduces the fundamental concept of linear function Rn → Rm and related notion of matrix, and describes a general object that deserves to be called the (total) derivative of a (typically nonlinear) function f : Rn → Rm. This (total) derivative is called the derivative matrix. The reasons why it is the right general concept and what it is good for will be the focus of the rest of Part III. In Chapter 14 we introduce linear transformations as a geometric way to think about matrices. The visual idea of composing two linear transformations (i.e., applying one and then another, such as rotating R2 around the origin by an angle and then shearing it in some direction) is calculated using a new algebraic idea: multiplying matrices. In the context of rigid motions in 3-dimensional space (relevant in robotics, video games, and computer vision) this yields a rich array of examples, applications, and insights. An important feature of matrices is that the product AB of matrices A and B depends on the order of multiplication; i.e., typically AB 6= BA. This phenomenon is studied further in Chapter 15, where we also introduce matrix addition and provide a list of familiar-looking properties of addition and multiplication for matrices (explaining why matrix multiplication really deserves to be called multiplication).",
    screenName: "LINEAR TRANSFORMATIONS",
  },
  {
    id: "7",
    title:
      "Near the end of Chapter 1 we defined length for vectors in Rn. Geometric reasoning with vectors can go much further, and to develop geometric intuition in Rn it is best to begin in the more familiar setting of R3. In this chapter we first show how many questions in 3-dimensional geometry that can be answered via trigonometry are a lot easier to answer with the language of vectors. That motivates how we can use geometric language to work with vectors in new ways. In particular, we generalize some considerations in 3-dimensional space to Rn with n > 3; this will be very fruitful in our later study and use of vectors. By the end of this chapter, you should be able to do the following for vectors in any Rn: • compute the dot product between vectors; • compute angles between vectors, and check for perpendicularity, by using the dot product; • compute the correlation coefficient using n-vectors, and recognize graphically from a plot of n data points the significance of positive and negative correlation coefficients.",
    screenName: "VECTOR GEOMETRY",
  },
  {
    id: "8",
    title:
      "The goal of this chapter is to introduce vectors and some ways to manipulate them. By the end of this chapter, you should be able to: • add vectors, and multiply vectors by scalars; • meaningfully interpret linear combinations of vectors arising in science and data analysis; • compute the length (also called magnitude) of a vector. 1.1. Vectors (and scalars). Example 1.1.1. You are flying a drone in the sky near your house. How do you describe exactly where it Is? You could mark the spot on the ground directly below the drone and measure (say in units of feet): • how far north of your house that spot on the ground is; • how far east of your house that spot on the ground is; • how high in the sky the drone is above that spot on the ground. Thus the position of the drone is completely specified by these three numbers: (distance north of house, distance east of house, height). If the position is (200, 300, 25) it means that the spot on the ground is 200 feet north and 300 feet east of your house, and the drone is 25 feet in the air above it. If the spot is instead 200 feet south of your house (and keep the same distances east and in the air) then the position is (−200, 300, 25). What we have just described is called the displacement vector from the house to the drone. It is an example of a 3-vector.",
    screenName: "VECTOR AND SCALARS",
  },
  {
    id: "9",
    title:
      "Muawiya’s reign (661-680) marks the beginning of the Umayyad dynasty, sometimes referred to as the Arab Kingdom due to the prominent role played by Arabs. Umayyad rule also marks the beginning of the hereditary principle for the caliphate, a principle that would remain until the dissolution of the caliphate in 1924. It should be noted, however, that although the first four caliphs followed an elective principle, it was a rather narrow group that participated in the election. Muawiya’s leadership represented an amalgam between Byzantine and traditional Arab elements, and it built upon the success that he had established as governor. He secured his son Yazid’s place as caliph, a move which he nonetheless buttressed with an oath of allegiance from the leading tribes. Despite these efforts a second civil war broke out between 680 and 692. Yazid (r.680-683) did succeed his father, but not without opposition from the next generation of the same groups that had opposed his father. Husayn, the son of Ali and Muhammad’s daughter Fatima, had quite a following in Iraq and posed a formidable challenge. Nevertheless, due to circumstances beyond his control, he was left with only 72 warriors to fight Yazid’s army, and a horrible massacre took place at Karbala in 680. Shiites commemorate this day every year as a day of mourning when Husayn and a number of other members of the prophet’s family were killed. It is during this era that Shiism brings together not only those who support Ali and his descendents for the caliphate, but also those who are disgusted with Arab privilege, in general, and Umayyad privilege, in particular. Thus, many non-Arab converts to Islam were attracted to Shiism for this reason.",
    screenName: "UMAYYAD DYNASTY",
  },
  {
    id: "10",
    title:
      "Muhammad’s death in 632 was a test of survival for the Muslims. The powerful among the clans of Medina, as well as the earliest followers from Mecca, sought to preserve the integrity of the religion and the political bonds of the confederation by electing Abu Bakr as a successor (caliph) to Muhammad. There would be no other prophet for the Muslims, but there was a need for someone to fill the many functions that Muhammad had served during his lifetime. Abu Bakr, an early convert, loyal follower, and father-in-law to Muhammad, was a logical choice. Some of the tribes refused to accept his leadership and stopped paying mandatory alms to the central treasury. Abu Bakr sent loyal Arab troops to reign in the rebelling tribes, initiating the so-called Wars of Apostasy. Tribes in flight, or seeking compensations for their losses, soon breached both the Iraqi-Sassanian and the Syrian-Byzantine frontiers. Abu Bakr encouraged raids into Palestine, where success emboldened the Arab tribesmen to merge forces and defeat a Byzantine army near Gaza in 634. From then on, sporadic incursions became invasions. The immediate causes of the Arab conquests were pressures and opportunities generated by wars among the Arabs themselves. Religious motives were in the background. The impoverishment and violence of life on the peninsula was the tinder for the spark caused by the Wars of Apostasy. ",
    screenName: "ORTHODOX CALIPHATE",
  },
  {
    id: "11",
    title:
      "Arabia was the cradle of Islam and of Arab civilization. In the 6th century A.D., it was a region with some sedentary agricultural and commercial life in the south (Yemen) and on the borders of Syria and Iraq, but the harsh interior was the domain of camel-raising nomads (bedouins). The bedouins were polytheists whose gods did not take the shape of humans or animals, but rather were amorphous spirits usually associated with specific geographic features, particularly those that gave comfort or shelter such as caves or watering holes. Their gods also dwelled in the skies. Additionally, they believed in jinns or spirits which could be good or bad and which came to the world in the form of animals. The socio-political unit of organization was the tribe [see Arab]. Among the various tribes of the peninsula, there were numerous disputes over water and pasturage. Culturally, the Arabs relied on poetry as a form of news, entertainment, and history. ",
    screenName: "PRE-ISLAMIC ARABIA",
  },
  {
    id: "12",
    title:
      "The Arabs were originally the people of the Arabian desert. Converted to Islam in the 7th century A.D., they conquered the Middle East from the Sassanian and Byzantine empires and established a succession of Arab-Islamic Middle Eastern empires from Spain to Central Asia and from the Caucasus to India. More profoundly, Islam, as well as its laws and doctrines, became the universally accepted religion and culture of the Persians, Turks, and many other peoples. What is referred to as Arab Civilization is a combination of certain classical Arab values [see Arab], Islamic culture and institutions, the inherited knowledge of the great civilizations of the Old World, and the unity provided by the Arabic language. The Arabs preserved and built upon existing knowledge in the realms of government, literature, philosophy, history, art and architecture, music, physical and mathematical sciences, biology, medicine, engineering, navigation, and commercial law. Although Arab control over Islamic empires proved ephemeral, Islam continued to flourish as a religion and civilization of the Middle East. Currently, one fifth of the world’s population is Muslim, and Islam has become the second largest religion in both Europe and North America. ",
    screenName: "ARAB CIVILIZATION",
  },
  {
    id: "13",
    title:
      "Although the notions of necessity and possibility (the so-called “modal notions”) seem indispensable in metaphysics, empiricists have traditionally challenged the appeal to these notions. Developments in the semantics of modal logic have, however, given philosophers reason to believe that the empiricist challenge can be met. At the core of modal semantics is the idea of a plurality of possible worlds. Metaphysicians have argued that this idea is perfectly respectable, indeed, that it is implicit in our pre philosophical thinking about modal matters; and they have claimed that it provides the tools for clarifying not only the concept of de dicto modality (the notion of necessity or possibility as ascribed to a proposition), but also the notion of de re modality (the notion of a thing’s exemplifying a property necessarily or contingently).",
    screenName: "THE NECESSARY AND THE POSSIBLE",
  },
  {
    id: "14",
    title:
      "Philosophers skeptical of the notion of a proposition have typically wanted to claim that we can accommodate all the phenomena of interest to the realist without introducing propositions into our ontology. One popular strategy here is metalinguistic – to claim that we can handle the propositional attitudes, that-clauses, and the truth values by reference to sentences. Another is that outlined by Arthur Prior, who invokes the redundancy theory of truth and a unique account of verbs of propositional attitude to give the result that talk apparently about propositions is really talk about familiar concrete objects. Still another is Russell’s multiple relation theory. More recently, however, philosophers have challenged the traditional doctrine of propositions by calling into question the phenomena that underlie the doctrine.",
    screenName: "PROPOSITIONS AND THEIR NEIGHBORS",
  },
  {
    id: "15",
    title:
      "The starting point for recent work on the metaphysics of time is McTaggart’s argument that time is unreal. McTaggart claimed that the things in time – events and the times at which they occur – can be ordered in two ways. There is the B-series which orders events and times in terms of the tenseless relations of being earlier than and later than, and there is the A-series which orders events and times in terms of the tensed properties of being past, present, and future. McTaggart argued, first, that the B-series presupposes the A-series and, second, that the assumption that there is an A-series leads to a contradiction; and he concluded that time is unreal. There were two sorts of replies to McTaggart. One group of thinkers (B-theorists) attacked the claim that the B-series presupposes the A-series. They insisted that the B-series is a properly temporal framework all by itself. They took time to be just a dimension along with the three spatial dimensions; they held that all times and their contents are equally real; and they insisted that tensed language can be translated into tenseless language.",
    screenName: "THE NATURE OF TIME",
  },
  {
    id: "16",
    title:
      "Traditional metaphysicians took causation to be a modal notion; they held that causes necessitate their effects. Hume attacked this idea. Invoking an empiricist theory of concepts, he claimed that if the concept of causation did involve the idea of necessary connection, the necessity would be an empirically manifest feature of particular causal sequences, and he argued that it is not. Causation, he insisted, is just constant conjunction or regularity of succession. Defenders of the traditional approach respond to Hume in a number of ways. Some (like Kant) reject Hume’s empiricism and insist that causation is an apriori concept. Others claim that Hume’s argument establishes only that causation is not an observational notion; they hold that causation is a theoretical concept. Still others insist that the causal relation is one that can be directly observed. More typical, however, are those philosophers who endorse Hume’s insistence that we provide a nonmodal account of causation. Among recent metaphysicians, some (like J. L. Mackie) continue to believe that a regularity analysis provides the requisite nonmodal account; whereas others follow David Lewis in defending a counterfactual analysis of causation.",
    screenName: "CAUSATION",
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
      <TextToSpeech
        style={{ zIndex: 999 }}
        passedData={selectedReading.title}
      ></TextToSpeech>
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
    zindex: 5,
  },
  textbox: {
    width: 350,
    margin: 7,
    borderColor: "black",
    borderRadius: 10,
    borderWidth: 2,
    zindex: 5,
  },
  text: {
    fontSize: 20,
    fontFamily: "Arial",
    textAlign: "center",
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
