(window.SUBJECTS = window.SUBJECTS || []).push({
  id: "research-statistics",
  track: "prereq",
  order: 8,
  code: "PRE 210",
  title: "Research Statistics",
  credits: 3,
  desc: "Research design and statistical reasoning for reading and running clinical research. Most PT programs require it, and it's the foundation for Evidence-Based Practice.",
  objectives: [
    "Classify study designs, variables, sampling methods, and levels of measurement",
    "Calculate and interpret descriptive statistics and z-scores",
    "Explain sampling distributions, standard error, and the Central Limit Theorem",
    "State hypotheses and interpret p-values, Type I and Type II errors, and power",
    "Choose and interpret the right inferential test (t-test, ANOVA, chi-square, nonparametric) for a research question",
    "Calculate and interpret correlation, regression, confidence intervals, and effect sizes",
    "Compute sensitivity and specificity from a 2×2 table and apply them to clinical tests"
  ],
  references: [
    "Portney LG. Foundations of Clinical Research: Applications to Evidence-Based Practice. F.A. Davis.",
    "Gravetter FJ, Wallnau LB. Statistics for the Behavioral Sciences. Cengage.",
    "Field A. Discovering Statistics Using IBM SPSS Statistics. SAGE.",
    "Jewell DV. Guide to Evidence-Based Physical Therapist Practice. Jones & Bartlett Learning."
  ],
  units: [
    {
      t: "Research Design",
      sub: "Variables, study types, sampling, validity",
      lesson: [
        "Every statistic you calculate later in this course depends on how the data were collected. A brilliant analysis cannot rescue a badly designed study, so research design comes first. Start with variables. The <b>independent variable (IV)</b> is what the researcher manipulates or uses to form groups, such as treatment type. The <b>dependent variable (DV)</b> is the outcome measured, such as pain on a 0-10 scale. A <b>confounding variable</b> is related to both and offers an alternative explanation: if older patients both exercise less and heal more slowly, age confounds any link between exercise and healing.",
        "Designs fall into two families. In an <b>experiment</b>, the researcher assigns the IV, and in a true experiment the assignment is random. <b>Random assignment</b> balances confounders, including ones nobody thought to measure, so a difference in the DV can be credited to the IV. That is why the randomized controlled trial (RCT) is the strongest single design for treatment questions. In <b>observational</b> designs the researcher only watches. A <b>cohort study</b> starts with exposure and follows people forward to the outcome (prospective) or reconstructs that path from records (retrospective). A <b>case-control study</b> starts with the outcome, comparing people who have a condition with people who do not, and looks back for exposures; it is efficient for rare conditions. A <b>cross-sectional study</b> measures everything at one time point, which is good for prevalence but cannot show which came first.",
        "Sampling decides who is studied. In <b>simple random sampling</b> every member of the population has an equal chance of selection. <b>Stratified random sampling</b> divides the population into subgroups (strata) such as age bands and samples randomly within each, guaranteeing representation. <b>Cluster sampling</b> randomly selects whole groups, such as clinics, and studies everyone in them. <b>Systematic sampling</b> takes every kth person from a list. <b>Convenience sampling</b> uses whoever is available; it is common in clinical research and limits generalization. Keep two ideas separate: <b>random sampling</b> protects <b>external validity</b> (do results generalize?), while <b>random assignment</b> protects <b>internal validity</b> (did the IV cause the change?).",
        "Levels of measurement determine which statistics are allowed. <b>Nominal</b> data are labels with no order (blood type, diagnosis). <b>Ordinal</b> data have order but unequal gaps (manual muscle test grades, 'mild, moderate, severe'). <b>Interval</b> data have equal gaps but no true zero (temperature in °C: 20° is not twice as hot as 10°). <b>Ratio</b> data have equal gaps and a true zero (range of motion, grip strength in kg, gait speed in m/s), so ratios make sense: 60° is twice 30°. Means and SDs require interval or ratio data; ordinal data are usually summarized with medians and analyzed with rank-based tests.",
        "Measurement quality is the final design question. <b>Reliability</b> is consistency, across repeated trials (test-retest), between examiners (inter-rater), or within one examiner (intra-rater). <b>Validity</b> is accuracy: is the tool measuring what it claims? A goniometer that reads 10° high every time is reliable but not valid. Bias in trials is reduced by <b>blinding</b>: single-blind hides group assignment from participants, and double-blind also hides it from the people delivering or measuring outcomes.",
        "<b>Worked example.</b> Suppose you want to know whether hip strengthening reduces knee pain in runners. A cross-sectional design would measure hip strength and knee pain in 100 runners on one day; a correlation of r = −0.40 would show that weaker runners tend to hurt more, but not which came first. A prospective cohort would measure hip strength in 500 healthy runners and follow them for a season; if 18% of weak runners and 8% of strong runners develop knee pain, weakness predicts pain, but weak runners might also run more miles. An RCT would recruit 80 runners with knee pain and randomly assign 40 to hip strengthening and 40 to usual care. Pain on a 0-10 scale (technically ordinal, commonly treated as interval) is the DV, the program is the IV, and a blinded assessor collects scores. Only the RCT supports the claim that the program causes the improvement.",
        "When you read any study, run the same checklist: What are the IV and DV? Was there random assignment? How were participants sampled? What level of measurement is the outcome? Who was blinded? Those five answers tell you how far to trust the numbers that follow."
      ],
      guide: [
        "<b>Independent variable (IV)</b> is what you manipulate or group by. <b>Dependent variable (DV)</b> is the outcome you measure.",
        "<b>Experiment</b> = random assignment to conditions. Only design that supports cause-and-effect claims.",
        "<b>Observational</b>: cohort (follow exposure forward), case-control (start with outcome, look back), cross-sectional (one snapshot).",
        "<b>Random sampling</b> protects external validity (generalize). <b>Random assignment</b> protects internal validity (causation).",
        "<b>Levels of measurement</b>: nominal (labels) → ordinal (ranked) → interval (equal gaps, no true zero) → ratio (true zero).",
        "<b>Reliability</b> = consistency. <b>Validity</b> = measuring what you claim to measure. A tool can be reliable but invalid.",
        "<b>Sampling methods</b>: simple random, stratified (random within subgroups), cluster (random whole groups), systematic (every kth), convenience (whoever is available, limits generalization).",
        "<b>Blinding</b>: single-blind hides assignment from participants; double-blind also hides it from those delivering treatment or measuring outcomes."
      ],
      terms: [
        ["Independent variable","The variable a researcher manipulates or uses to define groups."],
        ["Dependent variable","The outcome variable measured to see whether it changes with the independent variable."],
        ["Confounding variable","A variable related to both the independent and dependent variables that offers an alternative explanation for the results."],
        ["Random assignment","Placing participants into conditions by chance, which balances confounders and supports causal conclusions."],
        ["Random sampling","Selecting participants so each member of the population has an equal chance of inclusion, which supports generalization."],
        ["Cohort study","An observational design that identifies people by exposure and follows them to see who develops an outcome."],
        ["Case-control study","An observational design that starts with people who have and do not have an outcome and looks back for exposures."],
        ["Cross-sectional study","An observational design that measures exposure and outcome at a single point in time."],
        ["Internal validity","The degree to which a study's results reflect a true cause-and-effect relationship rather than bias or confounding."],
        ["External validity","The degree to which a study's results generalize to other people, settings, and times."],
        ["Ratio scale","A level of measurement with equal intervals and a true zero, such as range of motion in degrees."],
        ["Ordinal scale","A level of measurement with ranked categories whose intervals are not necessarily equal."]
      ],
      assignment: {
        title: "Design critique",
        task: "Pick one published PT study (PubMed: any RCT on a treatment you use, like dry needling or IASTM). Identify the IV, DV, design type, sampling method, and one possible confounder.",
        deliverable: "Half-page design breakdown with each element labeled"
      },
      gen: [],
      qs: [
        ["A study tests whether dry needling reduces neck pain. Pain score on a 0–10 scale is the…",["Dependent variable","Independent variable","Confounding variable","Control variable"],"The outcome you measure is the DV. Dry needling vs. no needling is the IV."],
        ["What feature makes a study a true experiment?",["Random assignment to conditions","A large sample size","A control group of any kind","Measurements taken over time"],"Random assignment balances confounders across groups, which is what allows causal conclusions."],
        ["Researchers follow 2,000 runners forward for 5 years and record who develops a stress fracture. Design?",["Prospective cohort study","Case-control study","Cross-sectional study","Randomized controlled trial"],"Exposure measured first, followed forward to the outcome, no assignment = prospective cohort."],
        ["Researchers compare 80 patients with ACL tears to 80 without and look back at their prior sports history. Design?",["Case-control study","Prospective cohort study","Randomized controlled trial","Cross-sectional study"],"Starting from the outcome (cases vs. controls) and looking backward at exposures defines case-control."],
        ["Random SAMPLING mainly protects which kind of validity?",["External validity (generalizability)","Internal validity (cause and effect)","Construct validity (the concept)","Face validity (looks right)"],"Sampling decides who is in the study, so it controls how well results generalize. Assignment controls causation."],
        ["Range of motion measured in degrees is what level of measurement?",["Ratio","Interval","Ordinal","Nominal"],"0° means no motion (a true zero), and 60° is twice 30°. That's ratio."],
        ["Blood type (A, B, AB, O) is measured at which level?",["Nominal","Ordinal","Interval","Ratio"],"Categories with no order are nominal."],
        ["A goniometer gives the same reading every time but is always 10° off. It is…",["Reliable but not valid","Valid but not reliable","Both reliable and valid","Neither reliable nor valid"],"Consistent = reliable. Consistently wrong = not valid."],
        ["Older patients both exercise less and heal slower, muddying an exercise-vs-healing study. Age is a…",["Confounding variable","Dependent variable","Moderator you manipulated","Placebo"],"A confounder is related to both the IV and DV and offers an alternative explanation."],
        ["In a double-blind trial, who doesn't know group assignment?",["Participants and outcome assessors","Only the participants in each group","Only the statistician analyzing data","Only the clinician delivering treatment"],"Double-blind hides assignment from both participants and the people measuring outcomes, reducing bias on both sides."],
        ["Splitting a clinic's patients into age bands, then randomly sampling within each band, is…",["Stratified random sampling","Cluster random sampling","Convenience sampling","Systematic (every kth) sampling"],"Strata are subgroups; sampling randomly within each one guarantees every subgroup is represented."],
        ["Manual muscle test grades (0, 1, 2, 3, 4, 5) are BEST classified as which level of measurement?",["Ordinal","Ratio","Interval","Nominal"],"MMT grades are ranked, but the gap between grade 2 and 3 is not equal to the gap between 4 and 5. Ranked categories with unequal gaps are ordinal."],
        ["A researcher randomly selects 10 outpatient clinics in a state and enrolls every patient at those clinics. Which sampling method is this?",["Cluster sampling","Stratified random sampling","Systematic sampling","Convenience sampling"],"Randomly choosing whole groups and studying everyone in them is cluster sampling. Stratified sampling samples individuals randomly within every subgroup."],
        ["A survey measures current smoking status and current low back pain in 1,000 adults on a single day. Which conclusion is this design LEAST able to support?",["Smoking caused the low back pain","The prevalence of low back pain in the sample","Whether smoking and back pain are associated","The proportion of adults in the sample who smoke"],"A cross-sectional snapshot can estimate prevalence and association, but it cannot show which came first, so it cannot support a causal claim."],
        ["A study of a new knee brace randomly assigns patients but recruits only collegiate athletes at one university. Which validity is MOST limited for applying results to older adults?",["External validity","Internal validity","Test-retest reliability","Construct validity"],"Random assignment protects internal validity, but a narrow sample limits how well results generalize to different populations, which is external validity."]
      ]
    },
    {
      t: "Describing Data",
      sub: "Center, spread, shape",
      lesson: [
        "Descriptive statistics compress a pile of numbers into a few values that describe <b>center</b>, <b>spread</b>, and <b>shape</b>. Before running any test, you should be able to say what a typical score is, how much scores vary, and whether the distribution is symmetric or skewed. These numbers also feed every later calculation, from z-scores to t-tests.",
        "The <b>mean</b> is the arithmetic average: <span class='formula'>x̄ = Σx / n</span>. Every value contributes, so one extreme value can pull the mean a long way. The <b>median</b> is the middle value once the data are sorted. With an odd n it is the single middle value; with an even n it is the average of the two middle values. The <b>mode</b> is the most frequent value and is the only measure of center for nominal data. Worked example: session lengths of 40, 45, 45, 50, and 120 minutes give a mean of 300 / 5 = 60 minutes but a median of 45 minutes. The one 120-minute session dragged the mean upward; the median describes the typical session better.",
        "That pattern defines skew. In a <b>right-skewed</b> (positively skewed) distribution a long tail extends to the right, as with income, hospital length of stay, or time to return to work, and the mean is greater than the median. In a <b>left-skewed</b> distribution the tail extends left, as with scores on an easy test where most people score near the top, and the mean is less than the median. In a symmetric distribution the mean and median are about equal. A practical rule: if the mean and median differ noticeably, the data are skewed, so report the median and interquartile range.",
        "Spread starts with the <b>range</b> (maximum − minimum), which uses only two values and is very sensitive to outliers. The <b>variance</b> averages the squared deviations from the mean: <span class='formula'>s² = Σ(x − x̄)² / (n − 1)</span>. Dividing by n − 1 rather than n (Bessel's correction) corrects the tendency of a sample to underestimate population spread, because sample values sit closer to their own mean than to the true population mean. The <b>standard deviation</b> is the square root of the variance, <span class='formula'>s = √s²</span>, which puts spread back into the original units.",
        "<b>Worked example: SD by hand.</b> Five grip strength scores (kg): 20, 22, 24, 26, 28. Mean = 120 / 5 = 24. Deviations: −4, −2, 0, +2, +4. Squared deviations: 16, 4, 0, 4, 16, which sum to 40. Variance = 40 / (5 − 1) = 10 kg². SD = √10 ≈ 3.16 kg. Interpretation: a typical client's grip is about 3 kg from the mean of 24 kg. Notice that the deviations always sum to zero, which is why they must be squared before averaging.",
        "The <b>interquartile range</b> (IQR) describes the middle 50%: <span class='formula'>IQR = Q3 − Q1</span>, where Q1 is the 25th percentile and Q3 is the 75th percentile. Because it ignores the extremes, the IQR resists outliers, which makes it the natural partner of the median. A common outlier rule flags values more than 1.5 × IQR below Q1 or above Q3. Example: Q1 = 30 and Q3 = 50, so IQR = 20 and 1.5 × IQR = 30. The fences are 30 − 30 = 0 and 50 + 30 = 80, so a value of 95 is an outlier. A <b>boxplot</b> shows exactly these pieces: the box runs from Q1 to Q3, a line marks the median, and whiskers extend to the most extreme non-outlier values.",
        "Choosing the right summary is the skill being tested. Symmetric interval or ratio data: report mean ± SD. Skewed data or data with outliers: report median and IQR. Nominal data: report counts, percentages, and the mode. Always look at a histogram or boxplot first, because two datasets can share a mean and SD yet look completely different."
      ],
      guide: [
        "<b>Mean</b> <span class='formula'>Σx / n</span> is pulled by outliers. <b>Median</b> is the middle value and resists outliers.",
        "Skewed data (income, length of stay) → report the <b>median</b>.",
        "<b>Right skew</b> (long tail right): mean > median. <b>Left skew</b>: mean < median.",
        "<b>Variance</b> <span class='formula'>s² = Σ(x−x̄)² / (n−1)</span>. <b>SD</b> = √variance, in the original units.",
        "<b>IQR</b> = Q3 − Q1, the spread of the middle 50%. Outlier rule: beyond 1.5 × IQR from the quartiles.",
        "<b>Mode</b>: most frequent value; the only measure of center for nominal data. <b>Range</b> = max − min, very sensitive to outliers.",
        "<b>Report</b>: symmetric data → mean ± SD; skewed data or outliers → median and IQR; nominal data → counts and percentages."
      ],
      terms: [
        ["Mean","The arithmetic average, calculated as the sum of the values divided by n."],
        ["Median","The middle value of a sorted dataset, resistant to outliers."],
        ["Mode","The most frequently occurring value in a dataset."],
        ["Range","The difference between the largest and smallest values."],
        ["Variance","The average squared deviation from the mean, calculated with n − 1 for a sample."],
        ["Standard deviation","The square root of the variance, describing typical distance from the mean in original units."],
        ["Interquartile range (IQR)","The spread of the middle 50% of the data, calculated as Q3 minus Q1."],
        ["Outlier","A value far from the rest of the data, often defined as more than 1.5 × IQR beyond the quartiles."],
        ["Right (positive) skew","A distribution with a long tail to the right, in which the mean is usually greater than the median."],
        ["Left (negative) skew","A distribution with a long tail to the left, in which the mean is usually less than the median."],
        ["Bessel's correction","Dividing by n − 1 instead of n when calculating sample variance to avoid underestimating population spread."],
        ["Boxplot","A graph showing the median, quartiles, whiskers, and outliers of a distribution."]
      ],
      assignment: {
        title: "Describe a real dataset",
        task: "Record one measure (e.g., resting HR, sit-and-reach, or session length) for 10 clients or days. Compute mean, median, SD, range, and IQR by hand, then check them in a spreadsheet.",
        deliverable: "Table of raw data plus summary statistics and one sentence on the shape (symmetric or skewed)"
      },
      gen: ["mean","median"],
      qs: [
        ["Hospital length-of-stay data has a few very long stays. Best measure of center?",["Median","Mean","Mode","Midrange"],"Long stays drag the mean upward. The median is robust to extreme values."],
        ["In a right-skewed distribution, typically…",["Mean > median","Mean < median","Mean = median","Mode > mean"],"The long right tail pulls the mean toward it, past the median."],
        ["Standard deviation describes…",["Typical distance of scores from the mean","The most frequently occurring score in the set","The middle score once the data are sorted","The difference between max and min"],"SD is the average-ish spread around the mean, in the original units."],
        ["If the SD is 4, the variance is…",["16","2","4","12"],"Variance = SD². 4² = 16."],
        ["Which statistic is most affected by a single extreme outlier?",["Mean","Median","IQR","Mode"],"Every value feeds the mean, so one extreme value shifts it. Median and IQR barely move."],
        ["Q1 = 22 and Q3 = 40. The IQR is…",["18","62","31","9"],"IQR = Q3 − Q1 = 40 − 22 = 18."],
        ["Why divide by n − 1 for a sample variance?",["It corrects the underestimate of population spread","It simplifies the arithmetic for small samples","It removes the influence of extreme outliers","It converts the scores into standard z units"],"Sample data hug their own mean, so dividing by n underestimates spread. n − 1 (Bessel's correction) fixes it."],
        ["Two classes both average 75. Class A has SD = 3, Class B has SD = 12. Which is true?",["Class B scores are more spread out","Class A had more students","Class B has a higher median","Class A is more skewed than Class B"],"Same center, different spread. Larger SD = scores scattered farther from the mean."],
        ["Five patients' walking times (minutes) are 10, 12, 14, 16, and 48. What is the mean?",["20","14","16","12"],"Sum = 100 and n = 5, so the mean is 100 / 5 = 20. The median is 14, showing how the 48-minute outlier pulls the mean up."],
        ["What is the median of 3, 8, 5, 10, 6, 7?",["6.5","6","7","5.5"],"Sorted: 3, 5, 6, 7, 8, 10. With an even n, the median is the average of the two middle values: (6 + 7) / 2 = 6.5."],
        ["Grip scores of 4, 6, and 8 kg have a mean of 6. What is the sample variance?",["4","2","8","2.67"],"Squared deviations are 4, 0, and 4, summing to 8. Divide by n − 1 = 2 to get 4. Dividing by n (3) would give 2.67, the population formula."],
        ["A dataset has Q1 = 30 and Q3 = 50. Using the 1.5 × IQR rule, which value is an outlier?",["95","75","10","55"],"IQR = 20, so 1.5 × IQR = 30. The fences are 0 and 80. Only 95 lies beyond a fence."],
        ["Most students score near 100% on an easy quiz, with a few very low scores. This distribution is:",["Left-skewed, with the mean below the median","Right-skewed, with the mean above the median","Symmetric, with the mean equal to the median","Bimodal, with two separate modes"],"A few low scores create a long left tail, which pulls the mean below the median."],
        ["Which measure of center is the ONLY appropriate one for nominal data such as diagnosis category?",["Mode","Median","Mean","Midrange"],"Nominal categories have no order or numeric value, so only the most frequent category (mode) can be reported."],
        ["A study reports length of stay as 'median 4 days (IQR 3-9).' Why did the authors MOST likely choose these statistics?",["The data were skewed, and the median and IQR resist extreme values","The data were nominal, so no mean or SD could be calculated at all","The sample was too small to compute a valid standard deviation","Journals always require the median and IQR for every outcome measure"],"Length of stay is typically right-skewed by a few long stays. The median and IQR describe skewed data better than the mean and SD."]
      ]
    },
    {
      t: "Normal Curve & z-Scores",
      sub: "Standardizing and the 68-95-99.7 rule",
      lesson: [
        "Many biological and clinical measures, such as height, grip strength within an age group, or test scores, cluster around a central value and taper off symmetrically. The <b>normal distribution</b> is the bell-shaped curve that models this pattern. It is defined by two numbers: the mean (μ), which locates the center, and the standard deviation (σ), which sets the width. The mean, median, and mode are equal, the curve is symmetric, and the total area under it is 1 (100%), so area corresponds to probability or percentage of scores.",
        "The <b>empirical rule</b> (68-95-99.7) is your mental map. About 68% of scores fall within ±1 SD of the mean, about 95% within ±2 SD, and about 99.7% within ±3 SD. From those three numbers you can work out tails by symmetry. If 68% are within ±1 SD, 32% are outside, split evenly: 16% above +1 SD and 16% below −1 SD. If 95% are within ±2 SD, 2.5% sit in each tail beyond 2 SD. The exact value that cuts off 2.5% in each tail is 1.96, which is why ±1.96 appears in 95% confidence intervals and two-tailed tests at α = .05.",
        "A <b>z-score</b> converts a raw score into SD units: <span class='formula'>z = (x − μ) / σ</span>. The sign gives direction (positive is above the mean, negative is below) and the size gives distance. Converting a whole normal distribution to z-scores produces the <b>standard normal distribution</b>, with mean 0 and SD 1. Because every z-score is on the same scale, you can compare results from different tests: a z of +1.5 on a balance test and +0.5 on a strength test means the person is further above average in balance, even though the raw units differ completely.",
        "<b>Worked example 1.</b> Suppose 30-second chair stand scores for a group of older women have μ = 14 and σ = 3. A patient completes 8 stands. z = (8 − 14) / 3 = −6 / 3 = −2.0. She is 2 SD below the mean. About 2.3% of scores fall below z = −2 (2.5% by the empirical rule), so she is at roughly the 2nd percentile, a clinically meaningful deficit. Another patient completes 17 stands: z = (17 − 14) / 3 = +1.0, about the 84th percentile (50% below the mean plus 34% between the mean and +1 SD).",
        "You can also work backward from z to a raw score with <span class='formula'>x = μ + zσ</span>. <b>Worked example 2.</b> Gait speed in a reference group has μ = 1.30 m/s and σ = 0.20 m/s. What speed is 1.5 SD below the mean? x = 1.30 + (−1.5)(0.20) = 1.30 − 0.30 = 1.00 m/s. This kind of reverse calculation is how clinical cutoffs such as '2 SD below normal' are turned into numbers you can use with a stopwatch.",
        "Percentiles connect z-scores to plain language. A percentile is the percentage of scores at or below a given value. Key anchors: z = 0 is the 50th percentile; z = +1 is about the 84th; z = −1 is about the 16th; z = +2 is about the 97.5th; z = −2 is about the 2.5th. For values between the anchors, use a z-table or software. A z-table usually gives the area to the left of z; subtract it from 1 to get the area to the right.",
        "Two cautions. First, z-score percentiles assume the data are approximately normal; for skewed measures, such as days to return to work, the percentile estimates can be badly wrong. Second, the reference group matters: a z-score computed against norms for 20-year-old men says little about a 75-year-old woman. Always check whose mean and SD you are using."
      ],
      guide: [
        "<b>z-score</b> <span class='formula'>z = (x − μ) / σ</span>: how many SDs a value sits from the mean.",
        "Standard normal: mean 0, SD 1. z = 0 is the 50th percentile.",
        "<b>Empirical rule</b>: ~68% within ±1 SD, ~95% within ±2 SD, ~99.7% within ±3 SD.",
        "Above z = +1 ≈ 16%. Above z = +2 ≈ 2.5%. Above z = +1.96 is exactly 2.5% (the 95% cutoff).",
        "Negative z = below the mean. Sign tells direction, size tells distance.",
        "<b>Reverse formula</b> <span class='formula'>x = μ + zσ</span>: converts a z-score back into a raw score.",
        "<b>Percentile anchors</b>: z = −2 ≈ 2.5th, z = −1 ≈ 16th, z = 0 = 50th, z = +1 ≈ 84th, z = +2 ≈ 97.5th.",
        "<b>Cautions</b>: z-based percentiles assume normality, and the reference group (age, sex) must match the patient."
      ],
      terms: [
        ["Normal distribution","A symmetric, bell-shaped distribution defined by its mean and standard deviation."],
        ["Standard normal distribution","The normal distribution of z-scores, with a mean of 0 and a standard deviation of 1."],
        ["z-score","The number of standard deviations a value lies above or below the mean."],
        ["Empirical rule","In a normal distribution, about 68%, 95%, and 99.7% of values fall within 1, 2, and 3 SDs of the mean."],
        ["Percentile","The percentage of scores in a distribution at or below a given value."],
        ["Percentile rank","The percentile assigned to a particular score within a reference distribution."],
        ["Tail","The extreme region at either end of a distribution, far from the mean."],
        ["Area under the curve","The proportion of scores in a region of a distribution, equivalent to probability."],
        ["z-table","A table giving the proportion of the standard normal distribution below (or above) each z-score."],
        ["Critical value 1.96","The z-score that cuts off 2.5% in each tail, used for 95% intervals and two-tailed tests at α = .05."],
        ["Standardization","Converting raw scores to z-scores so values from different scales can be compared."],
        ["Reference norms","The mean and SD from a defined comparison population used to interpret an individual's score."]
      ],
      assignment: {
        title: "z-score your clients",
        task: "Find published norms (mean and SD) for grip strength or the 30-second chair stand. Convert three real or sample client scores to z-scores and estimate each one's percentile.",
        deliverable: "Three z-scores with percentiles and a one-line clinical interpretation each"
      },
      gen: ["z","z","pct"],
      qs: [
        ["About what percent of a normal distribution falls within ±1 SD of the mean?",["68%","95%","50%","99.7%"],"Empirical rule: 68 / 95 / 99.7 for 1 / 2 / 3 SDs."],
        ["About what percent falls ABOVE z = +2?",["2.5%","5%","16%","13.5%"],"95% is within ±2, so 5% is outside, split into 2.5% per tail."],
        ["A z-score of −1.5 means the value is…",["1.5 SD below the mean","1.5 points below the mean","At the 15th percentile exactly","1.5 SD above the mean"],"z is measured in SD units; the minus sign means below."],
        ["A z-score of 0 corresponds to which percentile?",["50th","0th","68th","100th"],"z = 0 is exactly the mean, and in a symmetric normal curve the mean is the median."],
        ["The standard normal distribution has…",["Mean 0, SD 1","Mean 1, SD 0","Mean 50, SD 10","Mean 100, SD 15"],"Converting any normal variable to z-scores gives mean 0, SD 1."],
        ["About what percent falls ABOVE z = +1?",["16%","34%","32%","2.5%"],"68% is within ±1, leaving 32% in the tails, 16% per side."],
        ["Which z-score is the most unusual result?",["z = −2.8","z = 1.9","z = −1.2","z = 2.1"],"Distance from 0 is what matters. |−2.8| is the largest."],
        ["Patient A has z = 1.2 on a balance test; Patient B has z = 0.4 on the same test. Which is true?",["A scored further above average than B","B scored further above average than A","Both scored below the average","They can't be compared directly"],"z-scores on the same scale compare directly. 1.2 SD above beats 0.4 SD above."],
        ["Chair stand norms are μ = 14 and σ = 3. A patient completes 8 stands. What is the z-score?",["−2.0","−6.0","−0.5","+2.0"],"z = (8 − 14) / 3 = −6 / 3 = −2.0. Forgetting to divide by σ gives −6, a common error."],
        ["Gait speed norms are μ = 1.30 m/s and σ = 0.20 m/s. What speed corresponds to z = −1.5?",["1.00 m/s","1.60 m/s","1.10 m/s","0.70 m/s"],"x = μ + zσ = 1.30 + (−1.5)(0.20) = 1.30 − 0.30 = 1.00 m/s."],
        ["A score at z = +1 is at approximately which percentile?",["84th","68th","34th","16th"],"50% of scores are below the mean and about 34% fall between the mean and +1 SD, so about 84% are at or below z = +1."],
        ["Approximately what percentage of scores fall between z = −2 and z = +1?",["About 81.5%","About 68%","About 95%","About 47.5%"],"Between −2 and 0 is 47.5% (half of 95%), and between 0 and +1 is 34% (half of 68%). 47.5 + 34 = 81.5%."],
        ["A patient's balance z-score is +1.5 and their strength z-score is +0.5, each compared with age norms. What is the BEST interpretation?",["Balance is further above average than strength","Strength is the better score because its raw number is higher","The scores cannot be compared because the units differ","Both scores are below the average for their age group"],"z-scores put different measures on a common scale of SD units, so they can be compared directly. +1.5 is further above the mean than +0.5."],
        ["Why might a z-score percentile be misleading for 'days to return to work'?",["The data are typically right-skewed, not normal","z-scores cannot be calculated for time data","Days are a nominal level of measurement","The mean of time data is always zero"],"Percentiles from z-scores assume a normal distribution. Return-to-work data usually have a long right tail, so normal-based percentiles can be inaccurate."],
        ["Which value cuts off the top 2.5% of the standard normal distribution?",["z = 1.96","z = 1.00","z = 1.65","z = 2.58"],"1.96 leaves 2.5% in the upper tail (and 2.5% in the lower tail for −1.96). 1.65 cuts off 5% in one tail, and 2.58 cuts off 0.5%."]
      ]
    },
    {
      t: "Sampling & the CLT",
      sub: "Standard error and sampling distributions",
      lesson: [
        "Research almost never measures a whole population. You measure a <b>sample</b> and use it to estimate the population. A number describing a population is a <b>parameter</b> (Greek letters: μ for the mean, σ for the SD); a number describing a sample is a <b>statistic</b> (Roman letters: x̄ and s). The core problem of inferential statistics is that different samples from the same population give different statistics. This unit explains how much they vary and why that variation is predictable.",
        "Imagine drawing a sample of 25 adults, recording their mean resting heart rate, then repeating that thousands of times. The collection of all those sample means forms the <b>sampling distribution of the mean</b>. Its center equals the population mean μ, so the sample mean is an <i>unbiased</i> estimator. Its spread is much smaller than the spread of individual scores, because averaging cancels out extreme highs and lows. The SD of a sampling distribution has its own name: the <b>standard error</b> (SE).",
        "For the mean, <span class='formula'>SE = σ / √n</span>; when σ is unknown, which is almost always, use s in its place. <b>Worked example 1.</b> Resting heart rate has σ = 12 bpm. With n = 36, SE = 12 / √36 = 12 / 6 = 2 bpm. With n = 144, SE = 12 / 12 = 1 bpm. Quadrupling the sample size halved the SE, because of the square root. With n = 9, SE = 12 / 3 = 4 bpm. The lesson is that precision improves with sample size, but with diminishing returns.",
        "Keep SD and SE straight, because journals use both and readers confuse them. The <b>SD</b> describes how much <i>individual people</i> differ from one another; it does not shrink as you add people, because people really do differ. The <b>SE</b> describes how much a <i>sample mean</i> would differ from sample to sample; it does shrink as n grows. Use SD when describing your participants (mean age 54 ± 9 years). Use SE to build confidence intervals and test statistics.",
        "The <b>Central Limit Theorem</b> (CLT) is what makes inference practical. It states that, for sufficiently large samples, the sampling distribution of the mean is approximately normal <i>regardless of the shape of the population</i>, with mean μ and SD σ / √n. A common rule of thumb is n ≥ 30, although strongly skewed populations may need more and nearly normal populations need fewer. If the population itself is normal, the sampling distribution is normal at any n. This is why we can use normal-based and t-based methods on means even when raw data, such as hospital charges, are skewed.",
        "<b>Worked example 2.</b> Length of stay after knee replacement is right-skewed, with μ = 3.0 days and σ = 1.5 days. You draw a sample of n = 36. By the CLT, the sample mean is approximately normal with mean 3.0 and SE = 1.5 / 6 = 0.25 days. How unusual would a sample mean of 3.5 days be? z = (3.5 − 3.0) / 0.25 = 2.0. Only about 2.5% of sample means would be that high or higher by chance. Notice that the z-score now uses the SE, not the SD, because you are locating a <i>sample mean</i> within the sampling distribution, not an individual.",
        "Two kinds of error separate a statistic from the parameter. <b>Sampling error</b> is random: chance alone makes x̄ differ from μ, and it shrinks as n grows. <b>Bias</b> is systematic: a convenience sample of motivated volunteers, a poorly worded survey, or a miscalibrated device pushes results in one direction, and a bigger sample does not fix it. Large samples give precise estimates; only good design gives accurate ones."
      ],
      guide: [
        "<b>Parameter</b> describes a population (μ, σ). <b>Statistic</b> describes a sample (x̄, s).",
        "<b>Sampling distribution</b>: the distribution of a statistic (like x̄) across many repeated samples.",
        "<b>Standard error</b> <span class='formula'>SE = σ / √n</span>: the SD of the sampling distribution.",
        "Bigger n → smaller SE. Quadruple n to cut SE in half.",
        "<b>Central Limit Theorem</b>: with n ≈ 30+, the sampling distribution of x̄ is roughly normal even if the population isn't.",
        "<b>SD vs SE</b>: SD describes spread of individuals and does not shrink with n; SE describes spread of sample means and shrinks as n grows.",
        "<b>z for a sample mean</b> <span class='formula'>z = (x̄ − μ) / SE</span>: use SE, not SD, when locating a sample mean.",
        "<b>Sampling error</b> is random and shrinks with larger n; <b>bias</b> is systematic and is not fixed by a larger sample."
      ],
      terms: [
        ["Population","The entire group of individuals a researcher wants to draw conclusions about."],
        ["Sample","The subset of the population that is actually measured."],
        ["Parameter","A numerical value describing a population, such as μ or σ."],
        ["Statistic","A numerical value describing a sample, such as x̄ or s."],
        ["Sampling distribution","The distribution of a statistic across all possible samples of a given size from a population."],
        ["Standard error","The standard deviation of a sampling distribution, calculated for the mean as σ / √n."],
        ["Central Limit Theorem","For large samples, the sampling distribution of the mean is approximately normal regardless of the population's shape."],
        ["Sampling error","Random, chance difference between a sample statistic and the population parameter."],
        ["Bias","Systematic error that pushes estimates consistently in one direction."],
        ["Unbiased estimator","A statistic whose sampling distribution is centered on the parameter it estimates."],
        ["Law of large numbers","As sample size increases, the sample mean tends to get closer to the population mean."],
        ["Precision","How tightly repeated estimates cluster, which improves as the standard error decreases."]
      ],
      assignment: {
        title: "Watch the CLT happen",
        task: "In a spreadsheet, roll 5 dice (RANDBETWEEN) 50 times, average each roll, and histogram the 50 means. Repeat with 1 die. Compare the shapes and spreads.",
        deliverable: "Two histograms and three sentences explaining why the means look normal"
      },
      gen: ["se","se"],
      qs: [
        ["The mean resting heart rate of ALL adults in Mississippi is a…",["Parameter","Statistic","Sample","Variable estimate"],"Describes the full population = parameter. A sample's mean would be a statistic."],
        ["As sample size increases, the standard error…",["Decreases","Increases","Stays the same","Becomes the variance"],"SE = σ/√n. Larger n in the denominator shrinks it."],
        ["To cut the standard error in half, you need to…",["Quadruple the sample size","Double the sample size","Halve the sample size","Double the SD"],"Because of the square root, √4 = 2. Four times the n gives half the SE."],
        ["The Central Limit Theorem says the sampling distribution of the mean…",["Is roughly normal for large n, whatever the population's shape","Matches the population's shape exactly at every sample size","Is skewed whenever the population itself is skewed","Has the same SD as the population of individual scores"],"That's why we can use normal-based tests on means even with skewed raw data."],
        ["Standard error is the standard deviation of…",["The sampling distribution of a statistic","The raw scores in your sample","The population of individual scores","The residuals from a regression line"],"SD describes individuals. SE describes how much sample means bounce around."],
        ["The difference between a sample mean and the true population mean due to chance is called…",["Sampling error","Bias","Measurement error","Type I error"],"Random sample-to-sample variation is sampling error. Bias is systematic, not random."],
        ["A population has σ = 12 and you draw samples of n = 36. What is the standard error of the mean?",["2","6","0.33","12"],"SE = σ / √n = 12 / √36 = 12 / 6 = 2. The answer 6 is √36, which forgets to divide σ by it."],
        ["σ = 20 and n = 100. What is the SE of the mean?",["2","0.2","10","5"],"SE = 20 / √100 = 20 / 10 = 2."],
        ["A researcher increases sample size from 25 to 100. What happens to the SE?",["It is cut in half","It is cut to one quarter","It doubles in size","It stays the same size"],"n quadrupled, so √n doubled (5 to 10), which halves SE. SE shrinks with the square root of n, not with n itself."],
        ["A study table reports 'age 62 ± 8 years' to describe participants. The ± 8 is MOST appropriately the:",["Standard deviation","Standard error of the mean","Sampling error","Margin of error"],"When describing how much participants differ from one another, report the SD. The SE describes the precision of the mean and is used for inference."],
        ["Length of stay is right-skewed with μ = 3.0 and σ = 1.5 days. For n = 36, the sampling distribution of x̄ is BEST described as:",["About normal, centered at 3.0, with SE 0.25","Right-skewed, centered at 3.0, with SD 1.5","About normal, centered at 0, with SD 1.0","Right-skewed, centered at 3.0, with SE 0.25"],"By the CLT, with n = 36 the sample mean is about normal, centered on μ, with SE = 1.5 / √36 = 0.25."],
        ["Using the scenario μ = 3.0, SE = 0.25, what is the z-score for a sample mean of 3.5?",["2.0","0.33","0.5","4.0"],"z = (x̄ − μ) / SE = (3.5 − 3.0) / 0.25 = 0.5 / 0.25 = 2.0. Using σ (1.5) instead of SE would give 0.33."],
        ["A clinic surveys only patients who return for follow-up visits and concludes most patients are satisfied. Why will a larger sample of the same kind NOT fix this problem?",["The error is selection bias, which is systematic, not random","Larger samples always increase the standard error of the mean","Satisfaction cannot be measured on any numeric rating scale","The Central Limit Theorem applies only to physiological data"],"Unhappy patients may not return, which systematically biases results. More of the same sample increases precision but not accuracy."],
        ["Which statement about the standard deviation of individual scores is correct as sample size increases?",["It stays about the same, reflecting real differences between people","It shrinks steadily toward zero, just as the standard error does","It grows steadily larger as more extreme scores get included","It gradually becomes equal to the standard error of the mean"],"Individuals keep differing from each other no matter how many you measure, so the SD stabilizes near σ. Only the SE shrinks with n."],
        ["According to the Central Limit Theorem, the sampling distribution of the mean is exactly normal at any sample size when:",["The population itself is normally distributed","The sample is collected by convenience methods","The sample size is kept smaller than 30 people","The population is strongly skewed to the right"],"If the population is normal, sample means are normal at any n. The CLT's large-n approximation matters when the population is not normal."]
      ]
    },
    {
      t: "Hypothesis Testing",
      sub: "Nulls, p-values, errors, power",
      lesson: [
        "Hypothesis testing is a formal way to decide whether a pattern in a sample is strong enough to believe it exists in the population, or whether chance alone could plausibly explain it. The logic is like a courtroom: assume innocence, then ask whether the evidence is strong enough to reject that assumption.",
        "Every test begins with two statements. The <b>null hypothesis (H₀)</b> says there is no effect, no difference, or no relationship, for example 'mean pain is the same with and without the program.' The <b>alternative hypothesis (H₁)</b> says there is an effect. A <b>two-tailed</b> test looks for a difference in either direction; a <b>one-tailed</b> test looks in only one direction and must be justified before data collection. Before collecting data you also set the <b>significance level α</b>, the false-positive risk you are willing to accept, usually .05.",
        "Next you calculate a <b>test statistic</b>, generally of the form <span class='formula'>(observed effect − effect expected under H₀) / standard error</span>. It measures signal relative to noise. Then you find the <b>p-value</b>: the probability of obtaining a result at least as extreme as yours <i>if H₀ were true</i>. If p ≤ α, reject H₀ and call the result statistically significant. If p > α, <b>fail to reject</b> H₀. Never say you 'accept' or 'prove' the null; absence of evidence is not evidence of absence, especially in a small study.",
        "<b>Worked example.</b> A clinic's balance program claims to improve Berg scores. Historically, similar patients improve by μ = 0 points without the program. You treat n = 25 patients; their mean change is x̄ = +3.0 points with s = 5.0. SE = 5.0 / √25 = 1.0. Test statistic = (3.0 − 0) / 1.0 = 3.0. A statistic of 3.0 is far into the tail; the two-tailed p-value is well below .05 (about .006 with 24 df). Decision: reject H₀. If instead s had been 15, SE = 3.0, the statistic would be 1.0, p would be about .33, and you would fail to reject H₀. The same mean change was convincing or not depending on the noise.",
        "Two kinds of mistakes are possible. A <b>Type I error</b> is rejecting a true H₀, a false positive, such as concluding a useless treatment works; its probability is α. A <b>Type II error</b> is failing to reject a false H₀, a false negative, such as missing a treatment that really works; its probability is β. Lowering α to .01 makes Type I errors rarer but Type II errors more likely, so there is a trade-off. Running many tests on the same data inflates the overall Type I risk: with 20 independent tests at α = .05, you expect about one false positive by chance.",
        "<b>Power</b> = 1 − β is the probability of detecting an effect that really exists. Most studies aim for at least 80%. Power increases with a larger sample, a larger true effect, a larger α, and less measurement noise. Researchers run an <b>a priori power analysis</b> before a study to choose n. A non-significant result from an underpowered study is inconclusive, not proof that the treatment does not work.",
        "Finally, statistical significance is not clinical importance. With 2,000 participants, a 0.4-point drop in pain on a 0-10 scale can be highly significant yet meaningless to patients. Compare the size of the effect with the <b>minimal clinically important difference (MCID)</b>, and look at effect sizes and confidence intervals, which you will meet in Unit 9."
      ],
      guide: [
        "<b>H₀</b> (null): no effect / no difference. <b>H₁</b>: there is an effect.",
        "<b>p-value</b>: probability of results at least this extreme <i>if H₀ were true</i>. Not the probability H₀ is true.",
        "If p ≤ α (usually .05) → reject H₀. Otherwise → <b>fail to reject</b> (never \"accept\").",
        "<b>Type I error (α)</b>: false positive, rejecting a true H₀. <b>Type II error (β)</b>: false negative, missing a real effect.",
        "<b>Power</b> = 1 − β. Increase it with larger n, larger effect, larger α, less noise.",
        "Statistically significant ≠ clinically meaningful. Compare effects to the <b>MCID</b>.",
        "<b>Test statistic</b> <span class='formula'>(observed − expected under H₀) / SE</span>: signal divided by noise.",
        "<b>Multiple testing</b>: 20 tests at α = .05 → expect about 1 false positive. An underpowered non-significant result is inconclusive."
      ],
      terms: [
        ["Null hypothesis (H₀)","The statement that there is no effect, difference, or relationship in the population."],
        ["Alternative hypothesis (H₁)","The statement that an effect, difference, or relationship exists in the population."],
        ["Significance level (α)","The pre-set probability of a Type I error, usually .05."],
        ["p-value","The probability of results at least as extreme as those observed if the null hypothesis were true."],
        ["Test statistic","A value comparing the observed effect with the effect expected under H₀, scaled by the standard error."],
        ["Type I error","Rejecting a true null hypothesis; a false positive with probability α."],
        ["Type II error","Failing to reject a false null hypothesis; a false negative with probability β."],
        ["Statistical power","The probability of correctly rejecting a false null hypothesis, equal to 1 − β."],
        ["Two-tailed test","A test that looks for a difference in either direction from the null value."],
        ["One-tailed test","A test that looks for a difference in only one pre-specified direction."],
        ["Power analysis","A calculation, usually done before a study, of the sample size needed to detect a given effect."],
        ["Minimal clinically important difference (MCID)","The smallest change in an outcome that patients perceive as meaningful."]
      ],
      assignment: {
        title: "Hypothesis write-up",
        task: "For a question from your practice (e.g., does adding hip activation reduce knee pain?), write H0 and H1, choose alpha, and describe what a Type I and a Type II error would mean for a real patient.",
        deliverable: "Half-page hypothesis plan"
      },
      gen: [],
      qs: [
        ["The null hypothesis usually states that…",["There is no effect or difference","The treatment has a real effect","The sample is biased in some way","The p-value will be below .05"],"H₀ is the 'nothing is going on' baseline you try to find evidence against."],
        ["p = .03 with α = .05. Decision?",["Reject the null","Fail to reject the null","Accept the null","Accept the alternative as proven"],"p ≤ α → reject H₀. You still haven't 'proven' H₁."],
        ["p = .21 with α = .05. Correct wording?",["Fail to reject the null","Accept the null","Reject the null","The null is proven true"],"Not finding evidence isn't proof of no effect. 'Fail to reject' keeps that honest."],
        ["A p-value of .04 means…",["Under H₀, results at least this extreme occur about 4% of the time","There is a 4% chance that the null hypothesis is true","There is a 96% chance that the treatment really works","Only 4% of the patients in the study improved with treatment"],"The p-value assumes H₀ is true and asks how surprising your data are."],
        ["Concluding a treatment works when it actually doesn't is a…",["Type I error","Type II error","Sampling error","Power failure"],"False positive = Type I. Its probability is α."],
        ["A small study misses a treatment effect that really exists. That's a…",["Type II error","Type I error","Confound","Ceiling effect"],"False negative = Type II (β). Underpowered studies are prone to it."],
        ["Which change INCREASES statistical power?",["Larger sample size","Smaller α (e.g., .01)","More measurement noise","Smaller effect size"],"More data shrinks SE, making real effects easier to detect."],
        ["A study finds a statistically significant 0.4-point pain reduction, but the MCID is 2 points. Conclusion?",["Significant but not clinically meaningful","Clinically meaningful but not significant","Both significant and meaningful","The study is invalid"],"Large samples make tiny effects significant. Patients won't feel a change below the MCID."],
        ["Power is defined as…",["1 − β","1 − α","α + β","β / α"],"Power is the probability of correctly rejecting a false H₀, which is 1 − Type II error rate."],
        ["Mean change = 3.0 points, s = 5.0, n = 25, and the null value is 0. What is the test statistic (x̄ − 0) / (s / √n)?",["3.0","0.6","15.0","1.0"],"SE = 5 / √25 = 1.0, so the statistic is 3.0 / 1.0 = 3.0. Dividing by s instead of SE gives 0.6."],
        ["A researcher lowers α from .05 to .01 without changing anything else. What happens?",["Type I error risk falls and Type II error risk rises","Both Type I and Type II error risks fall together","Power increases because the test is now stricter","Type I error risk rises and power also increases"],"A stricter α makes false positives rarer but makes it harder to detect real effects, so β rises and power falls."],
        ["A pilot study of 12 patients finds p = .30 for a new treatment. What is the MOST appropriate conclusion?",["The result is inconclusive; the study may have been underpowered","The treatment has been proven not to work for these patients","The null hypothesis has been accepted as true","The treatment works but the effect is hidden by the p-value"],"Failing to reject H₀ in a small study does not show the treatment is ineffective. Low power makes Type II errors likely."],
        ["A researcher runs 20 independent comparisons at α = .05 and finds one significant result. What is the BEST interpretation?",["About one significant result is expected by chance alone","The significant comparison is a confirmed real effect","All 20 comparisons should be reported as significant","The p-values should be averaged across all tests"],"With 20 tests at α = .05, about one false positive is expected (20 × .05 = 1). Corrections such as Bonferroni address this."],
        ["Which is the purpose of an a priori power analysis?",["To choose a sample size large enough to detect a meaningful effect","To calculate the p-value after the data have been collected","To decide which participants to exclude as outliers","To convert a non-significant result into a significant one"],"Power analysis before the study sets n so that a clinically meaningful effect has a good chance (often 80%) of being detected."],
        ["Before data collection, a researcher predicts a new brace will REDUCE pain and tests only for a reduction. This is a:",["One-tailed test","Two-tailed test","Post hoc test","Nonparametric test"],"Testing a single pre-specified direction is a one-tailed test. It must be justified in advance and cannot be chosen after seeing the data."]
      ]
    },
    {
      t: "t-Tests",
      sub: "One-sample, independent, paired",
      lesson: [
        "The t-test family compares means when you have one or two groups and a continuous outcome. It extends the z-test to the realistic situation in which the population SD (σ) is unknown and must be estimated from the sample (s). Because s is itself uncertain, especially in small samples, the <b>t distribution</b> has heavier tails than the normal curve. Its exact shape depends on the <b>degrees of freedom (df)</b>; as df increases, the t distribution approaches the standard normal. With small df, a larger t is needed to reach significance.",
        "Every t-test has the same structure: <span class='formula'>t = (difference observed − difference expected under H₀) / SE of that difference</span>. A large |t| means the signal is big relative to noise, which produces a small p-value. What changes between the three versions is how the difference and its SE are defined.",
        "The <b>one-sample t-test</b> compares one sample's mean with a known or target value: <span class='formula'>t = (x̄ − μ₀) / (s / √n)</span>, with <span class='formula'>df = n − 1</span>. <b>Worked example 1.</b> A national benchmark for an initial evaluation is 45 minutes. In your clinic, n = 16 evaluations average x̄ = 50 minutes with s = 8. SE = 8 / √16 = 2. t = (50 − 45) / 2 = 2.5, df = 15. The two-tailed critical value for df = 15 at α = .05 is about 2.13. Since 2.5 > 2.13, reject H₀: your evaluations run longer than the benchmark.",
        "The <b>paired t-test</b> is used when each score in one condition is linked to a score in the other: the same people measured before and after, or matched pairs. You compute each person's difference score (d) and then run a one-sample t-test on those differences against 0: <span class='formula'>t = d̄ / (s_d / √n)</span>, with <span class='formula'>df = n − 1</span>, where n is the number of pairs. <b>Worked example 2.</b> Ten patients' pain falls by a mean of d̄ = 2.0 points with s_d = 1.5. SE = 1.5 / √10 ≈ 0.47. t ≈ 2.0 / 0.47 ≈ 4.2, df = 9; the critical value is about 2.26, so the reduction is significant. Pairing is powerful because each person serves as their own control, removing between-person variability from the noise.",
        "The <b>independent-samples t-test</b> compares two unrelated groups, such as dancers versus non-dancers. With equal variances assumed, <span class='formula'>df = n₁ + n₂ − 2</span>. The SE combines the variability of both groups. The equal-variance test uses a pooled variance; when the two groups are the same size, its SE equals <span class='formula'>SE = √(s₁²/n₁ + s₂²/n₂)</span>. <b>Worked example 3.</b> Group A (n = 20) has mean balance 50 with s = 6; group B (n = 20) has mean 45 with s = 8. SE = √(36/20 + 64/20) = √(1.8 + 3.2) = √5 ≈ 2.24. t = (50 − 45) / 2.24 ≈ 2.24, df = 38. The critical value is about 2.02, so the groups differ significantly.",
        "t-tests rest on assumptions: the outcome is continuous and roughly normally distributed (or n is large enough for the CLT to help), observations are independent, and, for the independent-samples test, the two groups have similar variances. <b>Levene's test</b> checks equal variances; if it is significant, use <b>Welch's t-test</b>, which adjusts the df. If the data are badly skewed or ordinal and samples are small, switch to a nonparametric test (Unit 7).",
        "The most common exam and real-world error is choosing the wrong t-test. Ask one question: are the two sets of scores linked? If the same people, or deliberately matched pairs, provide both scores, use the paired test. If the groups contain different, unrelated people, use the independent test. If there is only one group being compared with a fixed number, use the one-sample test. Analyzing paired data with an independent test throws away the pairing and usually loses power."
      ],
      guide: [
        "<b>One-sample t</b>: sample mean vs. a known value.",
        "<b>Independent t</b>: two separate groups. <span class='formula'>df = n₁ + n₂ − 2</span>",
        "<b>Paired t</b>: same people measured twice (pre/post) or matched pairs. <span class='formula'>df = n − 1</span>",
        "Use t instead of z when σ is unknown (almost always).",
        "Assumptions: roughly normal DV, independent observations, equal variances for independent t (check with <b>Levene's test</b>).",
        "Bigger |t| → smaller p.",
        "<b>Paired t</b> is a one-sample t on difference scores: <span class='formula'>t = d̄ / (s_d / √n)</span>. Each person is their own control.",
        "<b>Independent t SE</b> <span class='formula'>SE = √(s₁²/n₁ + s₂²/n₂)</span> (equals the pooled SE when group sizes are equal). If Levene's is significant, use <b>Welch's t</b>."
      ],
      terms: [
        ["t distribution","A bell-shaped distribution with heavier tails than the normal, used when σ is estimated from the sample."],
        ["Degrees of freedom (df)","The number of values free to vary when estimating a statistic, which determines the shape of the t distribution."],
        ["One-sample t-test","A test comparing a single sample mean with a known or hypothesized value."],
        ["Paired t-test","A test comparing two linked measurements, such as pre and post scores, using difference scores."],
        ["Independent-samples t-test","A test comparing the means of two separate, unrelated groups."],
        ["Difference score","The change for one person or pair, calculated by subtracting one measurement from the other."],
        ["Critical value","The test statistic value that must be exceeded to reject the null hypothesis at a chosen α."],
        ["Homogeneity of variance","The assumption that the groups being compared have similar variances."],
        ["Levene's test","A test of whether group variances are equal."],
        ["Welch's t-test","A version of the independent-samples t-test that does not assume equal variances."],
        ["Pooled variance","A weighted average of two groups' variances used in the equal-variance independent t-test."],
        ["Matched pairs","A design in which each participant in one group is paired with a similar participant in the other group."]
      ],
      assignment: {
        title: "Pick the t-test",
        task: "Write three mini study scenarios from your clinic: one each needing a one-sample, independent, and paired t-test. State df for each with your chosen sample sizes.",
        deliverable: "Three scenarios, the matching test, and df"
      },
      gen: ["df","df"],
      qs: [
        ["Same 20 patients measured before and after a 6-week program. Which test?",["Paired t-test","Independent t-test","One-sample t-test","Chi-square"],"Two measurements on the same people are linked, so you analyze the differences = paired."],
        ["Comparing balance scores between 30 dancers and 30 non-dancers. Which test?",["Independent-samples t-test","Paired-samples t-test","One-sample t-test","Repeated-measures ANOVA"],"Two separate, unrelated groups = independent t."],
        ["Is your clinic's average treatment time different from the national standard of 45 min?",["One-sample t-test","Paired t-test","Independent t-test","ANOVA"],"One sample compared to a known fixed value."],
        ["Why use a t-test instead of a z-test?",["The population SD is unknown","The sample is too large","The data are categorical","There are three or more groups"],"The t distribution accounts for extra uncertainty from estimating σ with s."],
        ["Levene's test checks which assumption?",["Equal variances between groups","Normality of the outcome","Independence of observations","Linearity of the relationship"],"Homogeneity of variance. If violated, use Welch's t-test."],
        ["As df increases, the t distribution…",["Approaches the normal distribution","Becomes more skewed to the right","Gets heavier, fatter tails","Shifts its center to the right"],"With more data, s estimates σ well and t converges to z."],
        ["Holding everything else constant, a larger absolute t-value leads to…",["A smaller p-value","A larger p-value","No change in p","A larger standard error"],"t measures signal relative to noise. Bigger signal → less likely under H₀."],
        ["Benchmark = 45 min. Your clinic: x̄ = 50, s = 8, n = 16. What is the one-sample t?",["2.5","0.625","10.0","5.0"],"SE = 8 / √16 = 2, so t = (50 − 45) / 2 = 2.5. Dividing by s instead of SE gives 0.625."],
        ["An independent-samples t-test compares 18 patients with 22 patients. What are the df?",["38","40","39","17"],"df = n₁ + n₂ − 2 = 18 + 22 − 2 = 38."],
        ["A paired t-test is run on 12 patients measured before and after treatment. What are the df?",["11","22","24","12"],"For a paired test, df = number of pairs − 1 = 12 − 1 = 11. Using 22 treats the data as two independent groups."],
        ["Ten patients' pain decreases by a mean of 2.0 points, with the SD of the differences equal to 1.5. The SE of the mean difference is about:",["0.47","0.15","1.50","4.74"],"SE = s_d / √n = 1.5 / √10 ≈ 1.5 / 3.16 ≈ 0.47."],
        ["Researchers match each patient with knee OA to a healthy person of the same age and sex, then compare quadriceps strength. Which test is MOST appropriate?",["Paired t-test","Independent-samples t-test","One-sample t-test","Chi-square test"],"Deliberately matched pairs are linked observations, so the paired test is appropriate, just as with pre-post data on the same people."],
        ["Levene's test is significant (p = .01) when comparing two groups. What is the BEST next step?",["Use Welch's t-test, which does not assume equal variances","Use a paired t-test instead of an independent t-test","Stop the analysis because the data are invalid","Report the standard t-test, since Levene's does not matter"],"A significant Levene's test means variances differ, so use Welch's correction. Switching to a paired test is wrong because the groups are not linked."],
        ["Why does a paired design usually have more power than an independent design with the same number of measurements?",["It removes between-person variability from the error term","It doubles the degrees of freedom available to the test","It eliminates the need for any normality assumption","It always produces a larger mean difference between scores"],"Each person serves as their own control, so stable individual differences drop out of the noise, shrinking the SE."],
        ["For a two-tailed test at α = .05, the critical t is about 2.13 with df = 15. Your calculated t = 1.80. Decision?",["Fail to reject H₀ because |t| is below the critical value","Reject H₀ because t is positive","Reject H₀ because t is larger than 1.96","Accept H₀ because the critical value was not exceeded"],"|1.80| < 2.13, so the result is not significant. You fail to reject (never 'accept') H₀, and with df = 15 you compare with 2.13, not 1.96."]
      ]
    },
    {
      t: "ANOVA, Chi-Square & Nonparametrics",
      sub: "3+ groups, categories, rank-based tests",
      lesson: [
        "t-tests handle two groups. When a study has three or more groups, or a categorical outcome, or data that break the assumptions of parametric tests, you need other tools. This unit covers the three you will meet most: analysis of variance (ANOVA), the chi-square test, and rank-based nonparametric tests.",
        "Why not just run several t-tests? Because each test carries its own α risk. With three groups you need three pairwise comparisons, and the chance of at least one false positive is about <span class='formula'>1 − (0.95)³ ≈ 0.14</span>, not .05. <b>One-way ANOVA</b> tests all groups at once with a single <b>F statistic</b>: <span class='formula'>F = MS<sub>between</sub> / MS<sub>within</sub></span>. The numerator reflects how far the group means are from each other; the denominator reflects ordinary variability among individuals within each group. If H₀ (all means equal) is true, F should be near 1. A large F means the groups differ more than chance would predict.",
        "<b>Worked example 1.</b> Thirty patients with neck pain are split into three groups of 10: manual therapy, exercise, and education. The ANOVA table shows SS<sub>between</sub> = 40 and SS<sub>within</sub> = 135. df<sub>between</sub> = k − 1 = 2; df<sub>within</sub> = N − k = 30 − 3 = 27. MS<sub>between</sub> = 40 / 2 = 20; MS<sub>within</sub> = 135 / 27 = 5. F = 20 / 5 = 4.0. With df (2, 27), the critical F at α = .05 is about 3.35, so F is significant. That tells you <i>at least one</i> mean differs, not which. You then run <b>post hoc</b> tests, such as Tukey's HSD, which compare pairs while controlling the familywise error rate. Alternatively, a <b>Bonferroni</b> correction divides α by the number of comparisons (.05 / 3 ≈ .017).",
        "Variations follow the same logic. <b>Repeated-measures ANOVA</b> handles the same people at three or more time points (strength at weeks 0, 4, and 8). <b>Factorial (two-way) ANOVA</b> tests two IVs at once, for example treatment type and sex, giving two <i>main effects</i> and an <i>interaction</i>, which asks whether the effect of one factor depends on the level of the other. ANOVA assumes approximately normal data, independent observations, and similar variances across groups.",
        "When both variables are categorical counts, use the <b>chi-square (χ²) test</b>. It compares observed counts (O) with the counts expected if the variables were unrelated (E): <span class='formula'>χ² = Σ (O − E)² / E</span>. Expected count for a cell = (row total × column total) / grand total. <b>Worked example 2.</b> Of 100 athletes, 50 play soccer and 50 play basketball; 40 in total were injured. If sport and injury were unrelated, each sport would have 50 × 40 / 100 = 20 injured. Observed: soccer 28 injured, basketball 12. The four cells contribute (28−20)²/20 = 3.2, (12−20)²/20 = 3.2, (22−30)²/30 ≈ 2.13, and (38−30)²/30 ≈ 2.13, so χ² ≈ 10.7 with df = (rows − 1)(columns − 1) = 1. The critical value is 3.84, so injury is related to sport. Expected counts should be at least 5 per cell; otherwise use Fisher's exact test.",
        "<b>Nonparametric tests</b> convert raw scores to ranks, so they do not assume normality and work with ordinal data or small, skewed samples. Learn the pairs: <b>Mann-Whitney U</b> replaces the independent t-test; <b>Wilcoxon signed-rank</b> replaces the paired t-test; <b>Kruskal-Wallis</b> replaces one-way ANOVA; <b>Friedman</b> replaces repeated-measures ANOVA; <b>Spearman's rho</b> replaces Pearson's r. The trade-off is that when parametric assumptions really are met, nonparametric tests have somewhat less power.",
        "A quick decision path: Is the outcome categorical counts? Use chi-square. Is it continuous? Count the groups (two versus three or more) and ask whether they are independent or repeated. Then ask whether the assumptions hold; if not, choose the rank-based partner."
      ],
      guide: [
        "<b>One-way ANOVA</b>: compare means of 3+ independent groups. <span class='formula'>F = between-group variance / within-group variance</span>",
        "Running many t-tests instead inflates the <b>Type I error rate</b>.",
        "Significant F only says 'some difference exists' → run <b>post hoc</b> tests (Tukey) to find where.",
        "<b>Repeated-measures ANOVA</b>: same people at 3+ time points.",
        "<b>Chi-square</b>: categorical variables (counts). Expected counts should be ≥ 5 per cell.",
        "Nonparametric swaps: Mann-Whitney U (independent t), Wilcoxon signed-rank (paired t), Kruskal-Wallis (one-way ANOVA), Spearman (Pearson).",
        "<b>ANOVA df</b>: between = k − 1; within = N − k. <span class='formula'>MS = SS / df</span>. Bonferroni: α ÷ number of comparisons.",
        "<b>Chi-square expected count</b> <span class='formula'>E = (row total × column total) / grand total</span>; <span class='formula'>df = (r − 1)(c − 1)</span>."
      ],
      terms: [
        ["One-way ANOVA","A test comparing the means of three or more independent groups on one continuous outcome."],
        ["F ratio","The ratio of between-group variance to within-group variance in ANOVA."],
        ["Familywise error rate","The probability of at least one Type I error across a set of comparisons."],
        ["Post hoc test","A follow-up comparison, such as Tukey's HSD, used after a significant ANOVA to find which groups differ."],
        ["Bonferroni correction","Dividing α by the number of comparisons to control the familywise error rate."],
        ["Repeated-measures ANOVA","An ANOVA comparing the same participants across three or more conditions or time points."],
        ["Interaction effect","When the effect of one independent variable depends on the level of another."],
        ["Chi-square test of independence","A test of whether two categorical variables are related, based on observed versus expected counts."],
        ["Expected count","The count expected in a cell if the two categorical variables were unrelated."],
        ["Nonparametric test","A test, usually rank-based, that does not assume a normal distribution."],
        ["Mann-Whitney U","A rank-based test comparing two independent groups."],
        ["Wilcoxon signed-rank test","A rank-based test comparing two related measurements, such as pre and post scores."]
      ],
      assignment: {
        title: "Test selection flowchart",
        task: "Build a decision tree that starts at 'What type is my DV?' and ends at a specific test: t-tests, ANOVA types, chi-square, and the nonparametric alternatives.",
        deliverable: "One-page flowchart you can use on exams"
      },
      gen: [],
      qs: [
        ["Comparing pain across manual therapy, exercise, and placebo groups. Which test?",["One-way ANOVA","Independent t-test","Paired t-test","Chi-square"],"Three independent groups with a continuous DV = one-way ANOVA."],
        ["Why not just run three separate t-tests?",["It inflates the Type I error rate","t-tests can't handle three groups' data","It reduces sample size","It violates normality"],"Each test carries a 5% false-positive risk; stacking them raises the overall risk to ~14%."],
        ["The ANOVA F-test is significant. Next step?",["Run post hoc tests to find which groups differ","Conclude that every group differs from the others","Run a chi-square test on the group means","Report that the null hypothesis is true"],"F tells you at least one mean differs. Post hoc tests (e.g., Tukey) pinpoint which."],
        ["Is injury (yes/no) related to sport (soccer, basketball, track)? Which test?",["Chi-square test of independence","One-way ANOVA on injury rates","Pearson correlation coefficient","Independent-samples t-test"],"Both variables are categorical counts = chi-square."],
        ["The F ratio compares…",["Variance between groups to variance within groups","Two group means directly, divided by their SE","Observed counts to expected counts in each cell","Pre-test scores to post-test scores in each person"],"A large F means groups differ more than random within-group noise would predict."],
        ["Strength measured in the same athletes at weeks 0, 4, and 8. Which test?",["Repeated-measures ANOVA","One-way between-groups ANOVA","Independent t-test","Chi-square test of independence"],"Same people, 3+ time points = repeated-measures ANOVA."],
        ["Nonparametric alternative to the independent-samples t-test?",["Mann-Whitney U","Wilcoxon signed-rank","Kruskal-Wallis","Spearman's rho"],"Mann-Whitney compares two independent groups by ranks. Wilcoxon signed-rank is the paired version."],
        ["Nonparametric alternative to a one-way ANOVA?",["Kruskal-Wallis","Mann-Whitney U","Friedman test","Chi-square"],"Kruskal-Wallis = rank-based one-way ANOVA. Friedman is the repeated-measures version."],
        ["A key chi-square assumption is…",["Expected counts of at least 5 per cell","Normally distributed scores in each group","Equal variances across all of the groups","Interval- or ratio-level outcome data"],"Small expected counts make the chi-square approximation unreliable. Use Fisher's exact test instead."],
        ["An ANOVA has MS<sub>between</sub> = 20 and MS<sub>within</sub> = 5. What is F?",["4.0","0.25","15","100"],"F = MS<sub>between</sub> / MS<sub>within</sub> = 20 / 5 = 4.0. Inverting the ratio gives 0.25."],
        ["A one-way ANOVA compares 4 groups with 10 participants each. What are df<sub>between</sub> and df<sub>within</sub>?",["3 and 36","4 and 40","3 and 39","4 and 36"],"df<sub>between</sub> = k − 1 = 3 and df<sub>within</sub> = N − k = 40 − 4 = 36."],
        ["A 2×2 table has a row total of 50, a column total of 40, and a grand total of 100. What is the expected count for that cell?",["20","45","40","90"],"E = (row total × column total) / grand total = (50 × 40) / 100 = 20."],
        ["A researcher plans 5 pairwise comparisons and uses a Bonferroni correction with overall α = .05. What α should each comparison use?",["0.01","0.05","0.25","0.10"],"Bonferroni divides α by the number of comparisons: .05 / 5 = .01."],
        ["A study tests whether a new exercise program works differently for men and women. Which result directly answers that question?",["The treatment × sex interaction","The main effect of treatment","The main effect of sex","The post hoc test for time"],"An interaction tests whether the effect of one factor (treatment) depends on another (sex). Main effects average across the other factor."],
        ["Pain ratings (ordinal, skewed) are collected from the same 15 patients before and after treatment. Which test is MOST appropriate?",["Wilcoxon signed-rank test","Mann-Whitney U test","Kruskal-Wallis H test","Independent-samples t-test"],"Two related measurements with ordinal, skewed data call for the Wilcoxon signed-rank test, the nonparametric partner of the paired t-test."]
      ]
    },
    {
      t: "Correlation & Regression",
      sub: "Relationships and prediction",
      lesson: [
        "Correlation and regression describe relationships between two continuous variables. Correlation asks how strongly they move together; regression builds an equation to predict one from the other. Both start with a <b>scatterplot</b>, which you should always look at before trusting any number. A scatterplot shows the direction, form (straight or curved), strength, and outliers at a glance.",
        "<b>Pearson's r</b> measures the strength and direction of a <i>linear</i> relationship between two interval or ratio variables. It ranges from −1 to +1. The sign gives direction: positive means both rise together; negative means one rises as the other falls. The absolute value gives strength. Common rough benchmarks treat |r| around .1 as weak, around .3 as moderate, and .5 or above as strong, although fields differ. r = 0 means no <i>linear</i> relationship; a strong U-shaped pattern, such as performance versus arousal, can produce r near 0.",
        "<b>r²</b>, the <b>coefficient of determination</b>, is the proportion of variance in Y explained by X. <b>Worked example 1.</b> If hip abduction strength and single-leg squat score correlate at r = .60, then r² = .36: 36% of the variation in squat scores is accounted for by strength, and 64% comes from other factors. Notice how quickly r² shrinks: r = .30 sounds respectable but explains only 9% of the variance. Squaring also removes the sign, so r = −.60 explains the same 36%.",
        "Correlation is not causation. A correlation can arise because X causes Y, Y causes X, or a third variable drives both (ice cream sales and drownings both rise in hot weather). Restricted range can hide a real relationship: in elite athletes who all have high strength, strength may correlate weakly with performance simply because there is little variation in strength. A single outlier can create or destroy a correlation, which is why the scatterplot matters. When data are ordinal, or the relationship is monotonic but curved, use <b>Spearman's rho</b>, which correlates ranks.",
        "<b>Simple linear regression</b> fits the line that best predicts Y from X: <span class='formula'>ŷ = b₀ + b₁x</span>. The <b>slope b₁</b> is the change in predicted Y for each one-unit increase in X. The <b>intercept b₀</b> is the predicted Y when X = 0, which may not be meaningful if X = 0 is outside the data. The line is fitted by <b>least squares</b>, minimizing the sum of squared <b>residuals</b>, where a residual is <span class='formula'>y − ŷ</span>, the actual value minus the predicted value. The slope and r are linked: <span class='formula'>b₁ = r × (s<sub>y</sub> / s<sub>x</sub>)</span>.",
        "<b>Worked example 2.</b> In older adults, a regression predicts gait speed (m/s) from age: ŷ = 2.00 − 0.012x. For a 70-year-old, ŷ = 2.00 − 0.012(70) = 2.00 − 0.84 = 1.16 m/s. Each additional year of age predicts gait speed 0.012 m/s slower, so ten years predicts 0.12 m/s slower. If a 70-year-old actually walks at 0.96 m/s, the residual is 0.96 − 1.16 = −0.20 m/s: she is slower than predicted for her age. Using this equation for a 20-year-old would be <b>extrapolation</b> if the data included only people aged 60 to 90, and the prediction may be nonsense. The intercept (2.00 m/s at age 0) is a mathematical anchor, not a real prediction.",
        "<b>Multiple regression</b> extends the idea to several predictors, such as age, strength, and balance confidence predicting gait speed. Each coefficient then describes the effect of one predictor while holding the others constant, which is how researchers adjust for confounders in observational data. Even so, adjustment can only handle measured confounders; it never fully replaces randomization."
      ],
      guide: [
        "<b>Pearson r</b> ranges −1 to +1. Sign = direction, size = strength. Rough guide: .1 weak, .3 moderate, .5+ strong.",
        "<b>r²</b> = proportion of variance in Y explained by X. r = .6 → r² = .36 (36%).",
        "Correlation ≠ causation. A third variable may drive both.",
        "<b>Regression</b> <span class='formula'>ŷ = b₀ + b₁x</span>. Slope b₁ = change in predicted Y per 1-unit increase in X.",
        "<b>Spearman's rho</b> for ordinal data or non-linear monotonic relationships.",
        "Outliers can inflate or kill a correlation. Always look at the scatterplot.",
        "<b>Residual</b> <span class='formula'>y − ŷ</span>: actual minus predicted. Least squares minimizes the sum of squared residuals.",
        "<b>Slope and r</b> <span class='formula'>b₁ = r × (s<sub>y</sub> / s<sub>x</sub>)</span>. Restricted range and outliers can distort r."
      ],
      terms: [
        ["Scatterplot","A graph of paired values for two variables, used to see the direction, form, and strength of a relationship."],
        ["Pearson's r","A coefficient from −1 to +1 measuring the strength and direction of a linear relationship."],
        ["Spearman's rho","A rank-based correlation for ordinal data or monotonic, non-linear relationships."],
        ["Coefficient of determination (r²)","The proportion of variance in one variable explained by another."],
        ["Simple linear regression","A method for predicting one variable from another using a straight-line equation."],
        ["Slope (b₁)","The change in predicted Y for each one-unit increase in X."],
        ["Intercept (b₀)","The predicted value of Y when X equals zero."],
        ["Residual","The difference between an observed value and the value predicted by the regression line."],
        ["Least squares","The method of fitting a regression line by minimizing the sum of squared residuals."],
        ["Extrapolation","Using a regression equation to predict values beyond the range of the observed data."],
        ["Restriction of range","Limited variability in a variable that weakens an observed correlation."],
        ["Multiple regression","Regression with two or more predictors, each estimated while holding the others constant."]
      ],
      assignment: {
        title: "Scatterplot study",
        task: "Collect two measures on 10+ people or sessions (e.g., hip abduction strength and single-leg squat quality score). Plot them, compute r and r², and fit a regression line in a spreadsheet.",
        deliverable: "Scatterplot with line, r, r², and a two-sentence interpretation including one causal caution"
      },
      gen: ["r2","reg","reg"],
      qs: [
        ["r = −0.85 between age and gait speed indicates…",["A strong negative relationship","A weak negative relationship","A strong positive relationship","No relationship"],"Size .85 = strong; minus sign = as age rises, gait speed falls."],
        ["Ice cream sales and drowning deaths are correlated. Best explanation?",["A third variable (hot weather) drives both","Eating ice cream causes people to drown","Drowning causes ice cream sales","The correlation reflects a Type II error"],"Classic confound. Correlation can't establish causation."],
        ["In ŷ = 12 + 3x, what does 3 mean?",["Predicted Y rises 3 units for each 1-unit rise in X","The predicted value of Y is 3 when X equals 0","X explains 3% of the variance in Y","The correlation between X and Y is 0.3"],"The slope is change in predicted Y per unit of X. 12 is the intercept."],
        ["Which correlation is strongest?",["r = −0.72","r = 0.65","r = 0.10","r = −0.30"],"Strength is the absolute value. |−0.72| is largest."],
        ["Correlating ranked pain levels (mild/moderate/severe) with something ordinal calls for…",["Spearman's rho","Pearson's r","Chi-square","Independent t-test"],"Ordinal data → rank-based Spearman correlation."],
        ["r = 0 most precisely means…",["No LINEAR relationship","No relationship of any kind","Perfect relationship","The data are invalid"],"A strong curved (U-shaped) pattern can still give r ≈ 0. Plot it."],
        ["Using a regression line to predict far outside the range of the data is called…",["Extrapolation","Interpolation","Regression to the mean","Overfitting"],"The relationship may not hold beyond observed X values."],
        ["Hip strength and squat score correlate at r = .60. What proportion of variance in squat score is explained by hip strength?",["36%","60%","40%","6%"],"r² = .60² = .36, or 36%. Reporting r itself (60%) as variance explained is a common error."],
        ["Using ŷ = 2.00 − 0.012x (age in years), what is the predicted gait speed for a 70-year-old?",["1.16 m/s","0.84 m/s","2.84 m/s","1.99 m/s"],"ŷ = 2.00 − 0.012(70) = 2.00 − 0.84 = 1.16 m/s. The value 0.84 is only the age term."],
        ["The predicted gait speed for a patient is 1.16 m/s, but she actually walks 0.96 m/s. What is her residual?",["−0.20 m/s","+0.20 m/s","−1.16 m/s","2.12 m/s"],"Residual = actual − predicted = 0.96 − 1.16 = −0.20. A negative residual means she is slower than predicted."],
        ["In elite sprinters who all have very high leg power, leg power correlates only weakly with sprint time. The MOST likely reason is:",["Restriction of range in leg power","Leg power has no effect on sprinting","The correlation must be a Type I error","Spearman's rho should always be used"],"When everyone has similar values, there is little variation for a correlation to detect. Restricted range can weaken a real relationship."],
        ["Which pair of r values explain the SAME proportion of variance?",["r = .50 and r = −.50","r = .50 and r = .25","r = −.50 and r = .05","r = .25 and r = −.50"],"r² removes the sign: .50² and (−.50)² both equal .25, or 25% of the variance."],
        ["In a multiple regression, the coefficient for strength is 0.02 m/s per kg after including age and balance confidence. This means:",["Each kg of strength predicts 0.02 m/s faster gait, holding the other predictors constant","Strength explains 2% of the variance in gait speed after adjusting for age","Strength causes gait speed to increase by 0.02 m/s in every individual patient","The simple correlation between strength and gait speed is equal to 0.02"],"Each multiple-regression coefficient is the predicted change in Y per unit of that predictor with the others held constant. It is not r, r², or proof of cause."],
        ["The slope relating X to Y is b₁ = r × (s<sub>y</sub> / s<sub>x</sub>). If r = .5, s<sub>y</sub> = 10, and s<sub>x</sub> = 2, what is b₁?",["2.5","0.1","5.0","10.0"],"b₁ = 0.5 × (10 / 2) = 0.5 × 5 = 2.5."],
        ["A study finds that patients who attend more PT sessions have better outcomes (r = .45). What is the BEST conclusion?",["Attendance and outcomes are related, but motivation could explain both","Attending more sessions causes better outcomes in all patients","45% of patients improved because they attended more sessions","The relationship is weak, so attendance is irrelevant to outcomes"],"Correlation does not establish cause; a third variable such as motivation could drive both. r = .45 is moderate, and it is not a percentage of patients."]
      ]
    },
    {
      t: "Confidence Intervals & Clinical Stats",
      sub: "CIs, effect size, diagnostic accuracy",
      lesson: [
        "A p-value answers a yes-or-no question: is the effect unlikely to be zero? Clinicians need more. How big is the effect, how precisely is it estimated, and how well does a test identify patients who have a condition? This unit covers confidence intervals, effect sizes, and diagnostic accuracy, the statistics you will use most in evidence-based practice.",
        "A <b>confidence interval</b> gives a range of plausible values for a population parameter: <span class='formula'>CI = estimate ± (critical value × SE)</span>. For a 95% CI with large samples the critical value is 1.96. <b>Worked example 1.</b> A trial finds a mean pain reduction of 7 points (on a 0-100 scale) with SE = 1.5. 95% CI = 7 ± 1.96 × 1.5 = 7 ± 2.94, or about 4.1 to 9.9 points. The correct interpretation is about the method: if the study were repeated many times, about 95% of intervals built this way would capture the true mean difference. Practically, effects between about 4 and 10 points are compatible with the data.",
        "CIs also tell you about significance. For a <i>difference</i> (mean difference, risk difference), if the 95% CI includes 0, the result is not significant at α = .05. For a <i>ratio</i> (odds ratio, relative risk), the null value is 1, so a CI that includes 1 is not significant. CIs get wider with a higher confidence level (99% versus 95%), a smaller sample, and more variability. Comparing the whole interval with the MCID is powerful: if the MCID is 10 points and the entire CI lies below 10, the treatment is unlikely to produce an important average benefit, even if it is significant.",
        "<b>Effect sizes</b> express magnitude independent of sample size. <b>Cohen's d</b> standardizes a mean difference: <span class='formula'>d = (mean₁ − mean₂) / pooled SD</span>. Benchmarks are 0.2 small, 0.5 medium, and 0.8 large. <b>Worked example 2.</b> An exercise group improves 6-minute walk distance by 60 m more than control, with a pooled SD of 80 m. d = 60 / 80 = 0.75, a medium-to-large effect. Other effect sizes include r, r², and, for ANOVA, eta-squared (η²).",
        "Diagnostic accuracy uses a <b>2×2 table</b> comparing a clinical test with a reference standard. Rows are test results (positive, negative); columns are true status (condition present, absent). Cells: true positives (TP), false positives (FP), false negatives (FN), true negatives (TN). <b>Sensitivity</b> = <span class='formula'>TP / (TP + FN)</span>, the proportion of people with the condition who test positive. <b>Specificity</b> = <span class='formula'>TN / (TN + FP)</span>, the proportion without the condition who test negative. High sensitivity means few false negatives, so a negative result rules out (<b>SnNout</b>). High specificity means few false positives, so a positive result rules in (<b>SpPin</b>).",
        "<b>Worked example 3.</b> A knee test is checked against MRI in 100 patients. 40 have a tear: 36 test positive (TP) and 4 test negative (FN). 60 have no tear: 54 test negative (TN) and 6 test positive (FP). Sensitivity = 36 / 40 = 0.90. Specificity = 54 / 60 = 0.90. <b>Positive predictive value</b> = TP / (TP + FP) = 36 / 42 ≈ 0.86, the probability of a tear given a positive test. <b>Negative predictive value</b> = TN / (TN + FN) = 54 / 58 ≈ 0.93. Unlike sensitivity and specificity, predictive values change with prevalence: the same test used in a population where tears are rare will have a lower PPV. <b>Likelihood ratios</b> combine sensitivity and specificity: <span class='formula'>LR+ = Sn / (1 − Sp)</span> = 0.90 / 0.10 = 9.",
        "Reliability statistics round out the toolkit. The <b>intraclass correlation coefficient (ICC)</b> measures agreement for continuous measures such as goniometry; values above about .75 are commonly described as good, although cutoffs vary by source. <b>Cohen's kappa</b> measures agreement for categorical ratings beyond what chance would produce. Reliability limits validity: an unreliable test cannot be an accurate one."
      ],
      guide: [
        "<b>95% CI</b>: if you repeated the study many times, 95% of the intervals built this way would capture the true value.",
        "CI for a <i>difference</i> that includes 0 → not significant at α = .05. CI for a <i>ratio</i> (OR, RR) that includes 1 → not significant.",
        "Wider CI: higher confidence level, smaller n, more variability.",
        "<b>Cohen's d</b>: 0.2 small, 0.5 medium, 0.8 large.",
        "<b>Sensitivity</b> <span class='formula'>TP/(TP+FN)</span>: catches true positives. High Sn, Negative test rules OUT (<b>SnNout</b>).",
        "<b>Specificity</b> <span class='formula'>TN/(TN+FP)</span>: clears true negatives. High Sp, Positive test rules IN (<b>SpPin</b>).",
        "<b>ICC</b> measures reliability of continuous measures (e.g., inter-rater goniometry).",
        "<b>CI formula</b> <span class='formula'>estimate ± 1.96 × SE</span> (95%, large samples). Compare the whole CI with the MCID. <b>Predictive values</b>: PPV = TP/(TP+FP), NPV = TN/(TN+FN); they change with prevalence. <span class='formula'>LR+ = Sn / (1 − Sp)</span>. <b>Kappa</b> = chance-corrected agreement for categories."
      ],
      terms: [
        ["Confidence interval","A range of plausible values for a population parameter, built so that a set percentage of such intervals capture the true value."],
        ["Margin of error","The critical value multiplied by the standard error, added to and subtracted from the estimate."],
        ["Effect size","A measure of the magnitude of an effect that does not depend on sample size."],
        ["Cohen's d","A standardized mean difference: the difference between means divided by the pooled SD."],
        ["Sensitivity","The proportion of people with a condition who test positive, TP / (TP + FN)."],
        ["Specificity","The proportion of people without a condition who test negative, TN / (TN + FP)."],
        ["Positive predictive value","The proportion of people with a positive test who actually have the condition."],
        ["Negative predictive value","The proportion of people with a negative test who truly do not have the condition."],
        ["Positive likelihood ratio (LR+)","How much more likely a positive result is in people with the condition than without, Sn / (1 − Sp)."],
        ["Prevalence","The proportion of a population that has a condition at a given time."],
        ["Intraclass correlation coefficient (ICC)","A reliability statistic describing agreement for continuous measurements."],
        ["Cohen's kappa","A chance-corrected measure of agreement between raters for categorical judgments."]
      ],
      assignment: {
        title: "Appraise a special test",
        task: "Look up sensitivity and specificity for a test you use (e.g., Lachman, Hawkins-Kennedy, Spurling). Build its 2×2 table for 100 hypothetical patients and say whether it's better for ruling in or ruling out.",
        deliverable: "2×2 table, Sn/Sp, and SnNout/SpPin conclusion"
      },
      gen: ["sens","sens"],
      qs: [
        ["The 95% CI for the difference between groups is −1.2 to 4.8. Conclusion at α = .05?",["Not significant, because the interval includes 0","Significant, because the interval is mostly positive","Significant, because 4.8 is large","Can't tell without the p-value"],"0 (no difference) is a plausible value inside the interval."],
        ["An odds ratio's 95% CI is 1.4 to 3.1. Conclusion?",["Significant, because 1 is not included","Not significant, because 0 isn't included","Not significant, because the CI is wide","Can't tell"],"For ratios, 1 means no effect. This interval excludes 1."],
        ["Which makes a confidence interval NARROWER?",["Larger sample size","Higher confidence level (99%)","More variability","Smaller sample size"],"More data → smaller SE → tighter interval."],
        ["Cohen's d = 0.8 is considered…",["A large effect","A small effect","A medium effect","No effect"],"Benchmarks: .2 small, .5 medium, .8 large."],
        ["A special test has very high sensitivity. A NEGATIVE result helps you…",["Rule the condition out (SnNout)","Rule the condition in (SpPin)","Calculate specificity","Nothing, sensitivity only applies to positives"],"High-Sn tests rarely miss true cases, so a negative is trustworthy for ruling out."],
        ["A test with very high specificity is positive. That helps you…",["Rule the condition in (SpPin)","Rule the condition out (SnNout)","Estimate prevalence","Measure reliability"],"High-Sp tests rarely flag healthy people, so a positive is trustworthy for ruling in."],
        ["Which statistic assesses inter-rater reliability for goniometer measurements?",["Intraclass correlation coefficient (ICC)","Cohen's d (standardized mean difference)","Chi-square test of independence","Odds ratio with its 95% CI"],"ICC quantifies agreement between raters on continuous measures. Kappa is for categorical ratings."],
        ["Correct interpretation of a single 95% CI of 4 to 10 points?",["95% of intervals built this way capture the true difference; 4–10 is plausible","95% of the individual patients improved by between 4 and 10 points","There is a 95% chance that the sample mean lies between 4 and 10","The p-value for the difference between the two groups is .95"],"Confidence describes the long-run success of the method, not individual patients."],
        ["Mean difference = 7 points with SE = 1.5. What is the approximate 95% CI?",["4.1 to 9.9","5.5 to 8.5","1.0 to 13.0","6.0 to 8.0"],"CI = 7 ± 1.96 × 1.5 = 7 ± 2.94, about 4.1 to 9.9. Using ±1 SE (5.5 to 8.5) gives only about a 68% interval."],
        ["An exercise group improves 60 m more than control on the 6-minute walk, with a pooled SD of 80 m. What is Cohen's d?",["0.75","1.33","0.25","20"],"d = mean difference / pooled SD = 60 / 80 = 0.75, a medium-to-large effect. Inverting gives 1.33."],
        ["In 40 patients with a tear, 36 test positive. In 60 without a tear, 54 test negative. What is the sensitivity?",["0.90","0.86","0.60","0.93"],"Sensitivity = TP / (TP + FN) = 36 / 40 = 0.90. 0.86 is the PPV and 0.93 is the NPV."],
        ["Using the same data (TP 36, FP 6, FN 4, TN 54), what is the positive predictive value?",["About 0.86","About 0.90","About 0.93","About 0.60"],"PPV = TP / (TP + FP) = 36 / 42 ≈ 0.86. It is the probability of a tear given a positive test."],
        ["A test has sensitivity 0.80 and specificity 0.90. What is the LR+?",["8.0","0.89","1.25","0.22"],"LR+ = Sn / (1 − Sp) = 0.80 / 0.10 = 8.0. The value 0.22 is the LR−: (1 − 0.80) / 0.90."],
        ["The same diagnostic test is moved from a specialty clinic (high prevalence) to a screening program (low prevalence). What is MOST likely to happen?",["PPV will fall while sensitivity and specificity stay about the same","Sensitivity will rise and specificity will fall in the new setting","PPV will rise because more people are being tested overall","Sensitivity, specificity, and PPV will all stay about the same"],"Predictive values depend on prevalence; with fewer true cases, more positives are false positives. Sensitivity and specificity are relatively stable."],
        ["A treatment's 95% CI for pain reduction is 2 to 6 points, and the MCID is 10 points. What is the BEST interpretation?",["The effect is likely real but unlikely to be clinically important","The effect is clinically important because the CI excludes 0","The result is not significant because the CI is narrow","The MCID should be ignored when the CI excludes 0"],"The CI excludes 0, so the effect is significant, but even its upper limit (6) is below the MCID (10). The average benefit is probably too small to matter."]
      ]
    }
  ]
});
