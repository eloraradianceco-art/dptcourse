(window.SUBJECTS = window.SUBJECTS || []).push({
 "id": "research-statistics",
 "track": "prereq",
 "order": 8,
 "code": "PRE 210",
 "title": "Research Statistics",
 "credits": 3,
 "desc": "Research design and statistical reasoning for reading and running clinical research. Most PT programs require it, and it's the foundation for Evidence-Based Practice.",
 "objectives": [
  "Classify study designs, variables, and levels of measurement",
  "Calculate and interpret descriptive statistics and z-scores",
  "Explain sampling distributions, standard error, and the Central Limit Theorem",
  "Choose and interpret the right inferential test for a research question",
  "Interpret confidence intervals, effect sizes, and diagnostic accuracy statistics"
 ],
 "units": [
  {
   "t": "Research Design",
   "sub": "Variables, study types, sampling, validity",
   "guide": [
    "<b>Independent variable (IV)</b> is what you manipulate or group by. <b>Dependent variable (DV)</b> is the outcome you measure.",
    "<b>Experiment</b> = random assignment to conditions. Only design that supports cause-and-effect claims.",
    "<b>Observational</b>: cohort (follow exposure forward), case-control (start with outcome, look back), cross-sectional (one snapshot).",
    "<b>Random sampling</b> protects external validity (generalize). <b>Random assignment</b> protects internal validity (causation).",
    "<b>Levels of measurement</b>: nominal (labels) → ordinal (ranked) → interval (equal gaps, no true zero) → ratio (true zero).",
    "<b>Reliability</b> = consistency. <b>Validity</b> = measuring what you claim to measure. A tool can be reliable but invalid."
   ],
   "assignment": {
    "title": "Design critique",
    "task": "Pick one published PT study (PubMed: any RCT on a treatment you use, like dry needling or IASTM). Identify the IV, DV, design type, sampling method, and one possible confounder.",
    "deliverable": "Half-page design breakdown with each element labeled"
   },
   "gen": [],
   "qs": [
    [
     "A study tests whether dry needling reduces neck pain. Pain score on a 0–10 scale is the…",
     [
      "Dependent variable",
      "Independent variable",
      "Confounding variable",
      "Control variable"
     ],
     "The outcome you measure is the DV. Dry needling vs. no needling is the IV."
    ],
    [
     "What feature makes a study a true experiment?",
     [
      "Random assignment to conditions",
      "A large sample size",
      "A control group of any kind",
      "Measurements taken over time"
     ],
     "Random assignment balances confounders across groups, which is what allows causal conclusions."
    ],
    [
     "Researchers follow 2,000 runners forward for 5 years and record who develops a stress fracture. Design?",
     [
      "Prospective cohort study",
      "Case-control study",
      "Cross-sectional study",
      "Randomized controlled trial"
     ],
     "Exposure measured first, followed forward to the outcome, no assignment = prospective cohort."
    ],
    [
     "Researchers compare 80 patients with ACL tears to 80 without and look back at their prior sports history. Design?",
     [
      "Case-control study",
      "Prospective cohort study",
      "Randomized controlled trial",
      "Cross-sectional study"
     ],
     "Starting from the outcome (cases vs. controls) and looking backward at exposures defines case-control."
    ],
    [
     "Random SAMPLING mainly protects which kind of validity?",
     [
      "External validity (generalizability)",
      "Internal validity (causation)",
      "Construct validity",
      "Face validity"
     ],
     "Sampling decides who is in the study, so it controls how well results generalize. Assignment controls causation."
    ],
    [
     "Range of motion measured in degrees is what level of measurement?",
     [
      "Ratio",
      "Interval",
      "Ordinal",
      "Nominal"
     ],
     "0° means no motion (a true zero), and 60° is twice 30°. That's ratio."
    ],
    [
     "Blood type (A, B, AB, O) is measured at which level?",
     [
      "Nominal",
      "Ordinal",
      "Interval",
      "Ratio"
     ],
     "Categories with no order are nominal."
    ],
    [
     "A goniometer gives the same reading every time but is always 10° off. It is…",
     [
      "Reliable but not valid",
      "Valid but not reliable",
      "Both reliable and valid",
      "Neither reliable nor valid"
     ],
     "Consistent = reliable. Consistently wrong = not valid."
    ],
    [
     "Older patients both exercise less and heal slower, muddying an exercise-vs-healing study. Age is a…",
     [
      "Confounding variable",
      "Dependent variable",
      "Moderator you manipulated",
      "Placebo"
     ],
     "A confounder is related to both the IV and DV and offers an alternative explanation."
    ],
    [
     "In a double-blind trial, who doesn't know group assignment?",
     [
      "Participants and the researchers assessing them",
      "Only the participants",
      "Only the statistician",
      "Only the treating clinician"
     ],
     "Double-blind hides assignment from both participants and the people measuring outcomes, reducing bias on both sides."
    ],
    [
     "Splitting a clinic's patients into age bands, then randomly sampling within each band, is…",
     [
      "Stratified random sampling",
      "Cluster sampling",
      "Convenience sampling",
      "Systematic sampling"
     ],
     "Strata are subgroups; sampling randomly within each one guarantees every subgroup is represented."
    ]
   ]
  },
  {
   "t": "Describing Data",
   "sub": "Center, spread, shape",
   "guide": [
    "<b>Mean</b> <span class='formula'>Σx / n</span> is pulled by outliers. <b>Median</b> is the middle value and resists outliers.",
    "Skewed data (income, length of stay) → report the <b>median</b>.",
    "<b>Right skew</b> (long tail right): mean > median. <b>Left skew</b>: mean < median.",
    "<b>Variance</b> <span class='formula'>s² = Σ(x−x̄)² / (n−1)</span>. <b>SD</b> = √variance, in the original units.",
    "<b>IQR</b> = Q3 − Q1, the spread of the middle 50%. Outlier rule: beyond 1.5 × IQR from the quartiles."
   ],
   "assignment": {
    "title": "Describe a real dataset",
    "task": "Record one measure (e.g., resting HR, sit-and-reach, or session length) for 10 clients or days. Compute mean, median, SD, range, and IQR by hand, then check them in a spreadsheet.",
    "deliverable": "Table of raw data plus summary statistics and one sentence on the shape (symmetric or skewed)"
   },
   "gen": [
    "mean",
    "median"
   ],
   "qs": [
    [
     "Hospital length-of-stay data has a few very long stays. Best measure of center?",
     [
      "Median",
      "Mean",
      "Mode",
      "Range"
     ],
     "Long stays drag the mean upward. The median is robust to extreme values."
    ],
    [
     "In a right-skewed distribution, typically…",
     [
      "Mean > median",
      "Mean < median",
      "Mean = median",
      "Mode > mean"
     ],
     "The long right tail pulls the mean toward it, past the median."
    ],
    [
     "Standard deviation describes…",
     [
      "Typical distance of scores from the mean",
      "The most common score",
      "The middle score",
      "The difference between max and min"
     ],
     "SD is the average-ish spread around the mean, in the original units."
    ],
    [
     "If the SD is 4, the variance is…",
     [
      "16",
      "2",
      "4",
      "8"
     ],
     "Variance = SD². 4² = 16."
    ],
    [
     "Which statistic is most affected by a single extreme outlier?",
     [
      "Mean",
      "Median",
      "IQR",
      "Mode"
     ],
     "Every value feeds the mean, so one extreme value shifts it. Median and IQR barely move."
    ],
    [
     "Q1 = 22 and Q3 = 40. The IQR is…",
     [
      "18",
      "62",
      "31",
      "9"
     ],
     "IQR = Q3 − Q1 = 40 − 22 = 18."
    ],
    [
     "Why divide by n − 1 for a sample variance?",
     [
      "It corrects the underestimate of population spread",
      "It makes the math easier",
      "It removes outliers",
      "It converts to standard units"
     ],
     "Sample data hug their own mean, so dividing by n underestimates spread. n − 1 (Bessel's correction) fixes it."
    ],
    [
     "Two classes both average 75. Class A has SD = 3, Class B has SD = 12. Which is true?",
     [
      "Class B scores are more spread out",
      "Class A had more students",
      "Class B has a higher median",
      "Class A is skewed"
     ],
     "Same center, different spread. Larger SD = scores scattered farther from the mean."
    ]
   ]
  },
  {
   "t": "Normal Curve & z-Scores",
   "sub": "Standardizing and the 68-95-99.7 rule",
   "guide": [
    "<b>z-score</b> <span class='formula'>z = (x − μ) / σ</span>: how many SDs a value sits from the mean.",
    "Standard normal: mean 0, SD 1. z = 0 is the 50th percentile.",
    "<b>Empirical rule</b>: ~68% within ±1 SD, ~95% within ±2 SD, ~99.7% within ±3 SD.",
    "Above z = +1 ≈ 16%. Above z = +2 ≈ 2.5%. Above z = +1.96 is exactly 2.5% (the 95% cutoff).",
    "Negative z = below the mean. Sign tells direction, size tells distance."
   ],
   "assignment": {
    "title": "z-score your clients",
    "task": "Find published norms (mean and SD) for grip strength or the 30-second chair stand. Convert three real or sample client scores to z-scores and estimate each one's percentile.",
    "deliverable": "Three z-scores with percentiles and a one-line clinical interpretation each"
   },
   "gen": [
    "z",
    "z",
    "pct"
   ],
   "qs": [
    [
     "About what percent of a normal distribution falls within ±1 SD of the mean?",
     [
      "68%",
      "95%",
      "50%",
      "99.7%"
     ],
     "Empirical rule: 68 / 95 / 99.7 for 1 / 2 / 3 SDs."
    ],
    [
     "About what percent falls ABOVE z = +2?",
     [
      "2.5%",
      "5%",
      "16%",
      "34%"
     ],
     "95% is within ±2, so 5% is outside, split into 2.5% per tail."
    ],
    [
     "A z-score of −1.5 means the value is…",
     [
      "1.5 SD below the mean",
      "1.5 points below the mean",
      "At the 15th percentile exactly",
      "1.5 SD above the mean"
     ],
     "z is measured in SD units; the minus sign means below."
    ],
    [
     "A z-score of 0 corresponds to which percentile?",
     [
      "50th",
      "0th",
      "68th",
      "100th"
     ],
     "z = 0 is exactly the mean, and in a symmetric normal curve the mean is the median."
    ],
    [
     "The standard normal distribution has…",
     [
      "Mean 0, SD 1",
      "Mean 1, SD 0",
      "Mean 50, SD 10",
      "Mean 100, SD 15"
     ],
     "Converting any normal variable to z-scores gives mean 0, SD 1."
    ],
    [
     "About what percent falls ABOVE z = +1?",
     [
      "16%",
      "34%",
      "32%",
      "2.5%"
     ],
     "68% is within ±1, leaving 32% in the tails, 16% per side."
    ],
    [
     "Which z-score is the most unusual result?",
     [
      "z = −2.8",
      "z = 1.9",
      "z = −1.2",
      "z = 2.1"
     ],
     "Distance from 0 is what matters. |−2.8| is the largest."
    ],
    [
     "Patient A has z = 1.2 on a balance test; Patient B has z = 0.4 on the same test. Which is true?",
     [
      "A scored further above average than B",
      "B scored higher than A",
      "Both are below average",
      "They can't be compared"
     ],
     "z-scores on the same scale compare directly. 1.2 SD above beats 0.4 SD above."
    ]
   ]
  },
  {
   "t": "Sampling & the CLT",
   "sub": "Standard error and sampling distributions",
   "guide": [
    "<b>Parameter</b> describes a population (μ, σ). <b>Statistic</b> describes a sample (x̄, s).",
    "<b>Sampling distribution</b>: the distribution of a statistic (like x̄) across many repeated samples.",
    "<b>Standard error</b> <span class='formula'>SE = σ / √n</span>: the SD of the sampling distribution.",
    "Bigger n → smaller SE. Quadruple n to cut SE in half.",
    "<b>Central Limit Theorem</b>: with n ≈ 30+, the sampling distribution of x̄ is roughly normal even if the population isn't."
   ],
   "assignment": {
    "title": "Watch the CLT happen",
    "task": "In a spreadsheet, roll 5 dice (RANDBETWEEN) 50 times, average each roll, and histogram the 50 means. Repeat with 1 die. Compare the shapes and spreads.",
    "deliverable": "Two histograms and three sentences explaining why the means look normal"
   },
   "gen": [
    "se",
    "se"
   ],
   "qs": [
    [
     "The mean resting heart rate of ALL adults in Mississippi is a…",
     [
      "Parameter",
      "Statistic",
      "Sample",
      "Variable estimate"
     ],
     "Describes the full population = parameter. A sample's mean would be a statistic."
    ],
    [
     "As sample size increases, the standard error…",
     [
      "Decreases",
      "Increases",
      "Stays the same",
      "Becomes the variance"
     ],
     "SE = σ/√n. Larger n in the denominator shrinks it."
    ],
    [
     "To cut the standard error in half, you need to…",
     [
      "Quadruple the sample size",
      "Double the sample size",
      "Halve the sample size",
      "Double the SD"
     ],
     "Because of the square root, √4 = 2. Four times the n gives half the SE."
    ],
    [
     "The Central Limit Theorem says the sampling distribution of the mean…",
     [
      "Is approximately normal for large n, regardless of population shape",
      "Matches the population's shape exactly",
      "Is always skewed",
      "Has the same SD as the population"
     ],
     "That's why we can use normal-based tests on means even with skewed raw data."
    ],
    [
     "Standard error is the standard deviation of…",
     [
      "The sampling distribution of a statistic",
      "The raw scores in your sample",
      "The population",
      "The residuals"
     ],
     "SD describes individuals. SE describes how much sample means bounce around."
    ],
    [
     "The difference between a sample mean and the true population mean due to chance is called…",
     [
      "Sampling error",
      "Bias",
      "Measurement error",
      "Type I error"
     ],
     "Random sample-to-sample variation is sampling error. Bias is systematic, not random."
    ]
   ]
  },
  {
   "t": "Hypothesis Testing",
   "sub": "Nulls, p-values, errors, power",
   "guide": [
    "<b>H₀</b> (null): no effect / no difference. <b>H₁</b>: there is an effect.",
    "<b>p-value</b>: probability of results at least this extreme <i>if H₀ were true</i>. Not the probability H₀ is true.",
    "If p ≤ α (usually .05) → reject H₀. Otherwise → <b>fail to reject</b> (never \"accept\").",
    "<b>Type I error (α)</b>: false positive, rejecting a true H₀. <b>Type II error (β)</b>: false negative, missing a real effect.",
    "<b>Power</b> = 1 − β. Increase it with larger n, larger effect, larger α, less noise.",
    "Statistically significant ≠ clinically meaningful. Compare effects to the <b>MCID</b>."
   ],
   "assignment": {
    "title": "Hypothesis write-up",
    "task": "For a question from your practice (e.g., does adding hip activation reduce knee pain?), write H0 and H1, choose alpha, and describe what a Type I and a Type II error would mean for a real patient.",
    "deliverable": "Half-page hypothesis plan"
   },
   "gen": [],
   "qs": [
    [
     "The null hypothesis usually states that…",
     [
      "There is no effect or difference",
      "The treatment works",
      "The sample is biased",
      "The p-value is small"
     ],
     "H₀ is the 'nothing is going on' baseline you try to find evidence against."
    ],
    [
     "p = .03 with α = .05. Decision?",
     [
      "Reject the null",
      "Fail to reject the null",
      "Accept the null",
      "Accept the alternative as proven"
     ],
     "p ≤ α → reject H₀. You still haven't 'proven' H₁."
    ],
    [
     "p = .21 with α = .05. Correct wording?",
     [
      "Fail to reject the null",
      "Accept the null",
      "Reject the null",
      "The null is proven true"
     ],
     "Not finding evidence isn't proof of no effect. 'Fail to reject' keeps that honest."
    ],
    [
     "A p-value of .04 means…",
     [
      "If H₀ were true, results this extreme would occur about 4% of the time",
      "There is a 4% chance H₀ is true",
      "There is a 96% chance the treatment works",
      "4% of patients improved"
     ],
     "The p-value assumes H₀ is true and asks how surprising your data are."
    ],
    [
     "Concluding a treatment works when it actually doesn't is a…",
     [
      "Type I error",
      "Type II error",
      "Sampling error",
      "Power failure"
     ],
     "False positive = Type I. Its probability is α."
    ],
    [
     "A small study misses a treatment effect that really exists. That's a…",
     [
      "Type II error",
      "Type I error",
      "Confound",
      "Ceiling effect"
     ],
     "False negative = Type II (β). Underpowered studies are prone to it."
    ],
    [
     "Which change INCREASES statistical power?",
     [
      "Larger sample size",
      "Smaller α (e.g., .01)",
      "More measurement noise",
      "Smaller effect size"
     ],
     "More data shrinks SE, making real effects easier to detect."
    ],
    [
     "A study finds a statistically significant 0.4-point pain reduction, but the MCID is 2 points. Conclusion?",
     [
      "Significant but not clinically meaningful",
      "Clinically meaningful but not significant",
      "Both significant and meaningful",
      "The study is invalid"
     ],
     "Large samples make tiny effects significant. Patients won't feel a change below the MCID."
    ],
    [
     "Power is defined as…",
     [
      "1 − β",
      "1 − α",
      "α + β",
      "β / α"
     ],
     "Power is the probability of correctly rejecting a false H₀, which is 1 − Type II error rate."
    ]
   ]
  },
  {
   "t": "t-Tests",
   "sub": "One-sample, independent, paired",
   "guide": [
    "<b>One-sample t</b>: sample mean vs. a known value.",
    "<b>Independent t</b>: two separate groups. <span class='formula'>df = n₁ + n₂ − 2</span>",
    "<b>Paired t</b>: same people measured twice (pre/post) or matched pairs. <span class='formula'>df = n − 1</span>",
    "Use t instead of z when σ is unknown (almost always).",
    "Assumptions: roughly normal DV, independent observations, equal variances for independent t (check with <b>Levene's test</b>).",
    "Bigger |t| → smaller p."
   ],
   "assignment": {
    "title": "Pick the t-test",
    "task": "Write three mini study scenarios from your clinic: one each needing a one-sample, independent, and paired t-test. State df for each with your chosen sample sizes.",
    "deliverable": "Three scenarios, the matching test, and df"
   },
   "gen": [
    "df",
    "df"
   ],
   "qs": [
    [
     "Same 20 patients measured before and after a 6-week program. Which test?",
     [
      "Paired t-test",
      "Independent t-test",
      "One-sample t-test",
      "Chi-square"
     ],
     "Two measurements on the same people are linked, so you analyze the differences = paired."
    ],
    [
     "Comparing balance scores between 30 dancers and 30 non-dancers. Which test?",
     [
      "Independent-samples t-test",
      "Paired t-test",
      "One-sample t-test",
      "Correlation"
     ],
     "Two separate, unrelated groups = independent t."
    ],
    [
     "Is your clinic's average treatment time different from the national standard of 45 min?",
     [
      "One-sample t-test",
      "Paired t-test",
      "Independent t-test",
      "ANOVA"
     ],
     "One sample compared to a known fixed value."
    ],
    [
     "Why use a t-test instead of a z-test?",
     [
      "The population SD is unknown",
      "The sample is too large",
      "The data are categorical",
      "There are three groups"
     ],
     "The t distribution accounts for extra uncertainty from estimating σ with s."
    ],
    [
     "Levene's test checks which assumption?",
     [
      "Equal variances between groups",
      "Normality",
      "Independence",
      "Linearity"
     ],
     "Homogeneity of variance. If violated, use Welch's t-test."
    ],
    [
     "As df increases, the t distribution…",
     [
      "Approaches the normal distribution",
      "Becomes more skewed",
      "Gets fatter tails",
      "Shifts to the right"
     ],
     "With more data, s estimates σ well and t converges to z."
    ],
    [
     "Holding everything else constant, a larger absolute t-value leads to…",
     [
      "A smaller p-value",
      "A larger p-value",
      "No change in p",
      "A larger standard error"
     ],
     "t measures signal relative to noise. Bigger signal → less likely under H₀."
    ]
   ]
  },
  {
   "t": "ANOVA, Chi-Square & Nonparametrics",
   "sub": "3+ groups, categories, rank-based tests",
   "guide": [
    "<b>One-way ANOVA</b>: compare means of 3+ independent groups. <span class='formula'>F = between-group variance / within-group variance</span>",
    "Running many t-tests instead inflates the <b>Type I error rate</b>.",
    "Significant F only says 'some difference exists' → run <b>post hoc</b> tests (Tukey) to find where.",
    "<b>Repeated-measures ANOVA</b>: same people at 3+ time points.",
    "<b>Chi-square</b>: categorical variables (counts). Expected counts should be ≥ 5 per cell.",
    "Nonparametric swaps: Mann-Whitney U (independent t), Wilcoxon signed-rank (paired t), Kruskal-Wallis (one-way ANOVA), Spearman (Pearson)."
   ],
   "assignment": {
    "title": "Test selection flowchart",
    "task": "Build a decision tree that starts at 'What type is my DV?' and ends at a specific test: t-tests, ANOVA types, chi-square, and the nonparametric alternatives.",
    "deliverable": "One-page flowchart you can use on exams"
   },
   "gen": [],
   "qs": [
    [
     "Comparing pain across manual therapy, exercise, and placebo groups. Which test?",
     [
      "One-way ANOVA",
      "Independent t-test",
      "Paired t-test",
      "Chi-square"
     ],
     "Three independent groups with a continuous DV = one-way ANOVA."
    ],
    [
     "Why not just run three separate t-tests?",
     [
      "It inflates the Type I error rate",
      "t-tests can't handle three groups' data",
      "It reduces sample size",
      "It violates normality"
     ],
     "Each test carries a 5% false-positive risk; stacking them raises the overall risk to ~14%."
    ],
    [
     "The ANOVA F-test is significant. Next step?",
     [
      "Run post hoc tests to find which groups differ",
      "Conclude all groups differ",
      "Run a chi-square",
      "Report that the null is true"
     ],
     "F tells you at least one mean differs. Post hoc tests (e.g., Tukey) pinpoint which."
    ],
    [
     "Is injury (yes/no) related to sport (soccer, basketball, track)? Which test?",
     [
      "Chi-square test of independence",
      "One-way ANOVA",
      "Pearson correlation",
      "Paired t-test"
     ],
     "Both variables are categorical counts = chi-square."
    ],
    [
     "The F ratio compares…",
     [
      "Variance between groups to variance within groups",
      "Two means directly",
      "Observed to expected counts",
      "Pre to post scores"
     ],
     "A large F means groups differ more than random within-group noise would predict."
    ],
    [
     "Strength measured in the same athletes at weeks 0, 4, and 8. Which test?",
     [
      "Repeated-measures ANOVA",
      "One-way ANOVA",
      "Independent t-test",
      "Chi-square"
     ],
     "Same people, 3+ time points = repeated-measures ANOVA."
    ],
    [
     "Nonparametric alternative to the independent-samples t-test?",
     [
      "Mann-Whitney U",
      "Wilcoxon signed-rank",
      "Kruskal-Wallis",
      "Spearman's rho"
     ],
     "Mann-Whitney compares two independent groups by ranks. Wilcoxon signed-rank is the paired version."
    ],
    [
     "Nonparametric alternative to a one-way ANOVA?",
     [
      "Kruskal-Wallis",
      "Mann-Whitney U",
      "Friedman test",
      "Chi-square"
     ],
     "Kruskal-Wallis = rank-based one-way ANOVA. Friedman is the repeated-measures version."
    ],
    [
     "A key chi-square assumption is…",
     [
      "Expected counts of at least 5 per cell",
      "Normally distributed data",
      "Equal variances",
      "Interval-level data"
     ],
     "Small expected counts make the chi-square approximation unreliable. Use Fisher's exact test instead."
    ]
   ]
  },
  {
   "t": "Correlation & Regression",
   "sub": "Relationships and prediction",
   "guide": [
    "<b>Pearson r</b> ranges −1 to +1. Sign = direction, size = strength. Rough guide: .1 weak, .3 moderate, .5+ strong.",
    "<b>r²</b> = proportion of variance in Y explained by X. r = .6 → r² = .36 (36%).",
    "Correlation ≠ causation. A third variable may drive both.",
    "<b>Regression</b> <span class='formula'>ŷ = b₀ + b₁x</span>. Slope b₁ = change in predicted Y per 1-unit increase in X.",
    "<b>Spearman's rho</b> for ordinal data or non-linear monotonic relationships.",
    "Outliers can inflate or kill a correlation. Always look at the scatterplot."
   ],
   "assignment": {
    "title": "Scatterplot study",
    "task": "Collect two measures on 10+ people or sessions (e.g., hip abduction strength and single-leg squat quality score). Plot them, compute r and r², and fit a regression line in a spreadsheet.",
    "deliverable": "Scatterplot with line, r, r², and a two-sentence interpretation including one causal caution"
   },
   "gen": [
    "r2",
    "reg",
    "reg"
   ],
   "qs": [
    [
     "r = −0.85 between age and gait speed indicates…",
     [
      "A strong negative relationship",
      "A weak negative relationship",
      "A strong positive relationship",
      "No relationship"
     ],
     "Size .85 = strong; minus sign = as age rises, gait speed falls."
    ],
    [
     "Ice cream sales and drowning deaths are correlated. Best explanation?",
     [
      "A third variable (hot weather) drives both",
      "Ice cream causes drowning",
      "Drowning causes ice cream sales",
      "The correlation is a Type II error"
     ],
     "Classic confound. Correlation can't establish causation."
    ],
    [
     "In ŷ = 12 + 3x, what does 3 mean?",
     [
      "Predicted Y increases 3 units per 1-unit increase in X",
      "Y equals 3 when X is 0",
      "X explains 3% of Y",
      "The correlation is 0.3"
     ],
     "The slope is change in predicted Y per unit of X. 12 is the intercept."
    ],
    [
     "Which correlation is strongest?",
     [
      "r = −0.72",
      "r = 0.65",
      "r = 0.10",
      "r = −0.30"
     ],
     "Strength is the absolute value. |−0.72| is largest."
    ],
    [
     "Correlating ranked pain levels (mild/moderate/severe) with something ordinal calls for…",
     [
      "Spearman's rho",
      "Pearson's r",
      "Chi-square",
      "Independent t-test"
     ],
     "Ordinal data → rank-based Spearman correlation."
    ],
    [
     "r = 0 most precisely means…",
     [
      "No LINEAR relationship",
      "No relationship of any kind",
      "Perfect relationship",
      "The data are invalid"
     ],
     "A strong curved (U-shaped) pattern can still give r ≈ 0. Plot it."
    ],
    [
     "Using a regression line to predict far outside the range of the data is called…",
     [
      "Extrapolation",
      "Interpolation",
      "Regression to the mean",
      "Overfitting"
     ],
     "The relationship may not hold beyond observed X values."
    ]
   ]
  },
  {
   "t": "Confidence Intervals & Clinical Stats",
   "sub": "CIs, effect size, diagnostic accuracy",
   "guide": [
    "<b>95% CI</b>: if you repeated the study many times, 95% of the intervals built this way would capture the true value.",
    "CI for a <i>difference</i> that includes 0 → not significant at α = .05. CI for a <i>ratio</i> (OR, RR) that includes 1 → not significant.",
    "Wider CI: higher confidence level, smaller n, more variability.",
    "<b>Cohen's d</b>: 0.2 small, 0.5 medium, 0.8 large.",
    "<b>Sensitivity</b> <span class='formula'>TP/(TP+FN)</span>: catches true positives. High Sn, Negative test rules OUT (<b>SnNout</b>).",
    "<b>Specificity</b> <span class='formula'>TN/(TN+FP)</span>: clears true negatives. High Sp, Positive test rules IN (<b>SpPin</b>).",
    "<b>ICC</b> measures reliability of continuous measures (e.g., inter-rater goniometry)."
   ],
   "assignment": {
    "title": "Appraise a special test",
    "task": "Look up sensitivity and specificity for a test you use (e.g., Lachman, Hawkins-Kennedy, Spurling). Build its 2×2 table for 100 hypothetical patients and say whether it's better for ruling in or ruling out.",
    "deliverable": "2×2 table, Sn/Sp, and SnNout/SpPin conclusion"
   },
   "gen": [
    "sens",
    "sens"
   ],
   "qs": [
    [
     "The 95% CI for the difference between groups is −1.2 to 4.8. Conclusion at α = .05?",
     [
      "Not significant, because the interval includes 0",
      "Significant, because the interval is mostly positive",
      "Significant, because 4.8 is large",
      "Can't tell without the p-value"
     ],
     "0 (no difference) is a plausible value inside the interval."
    ],
    [
     "An odds ratio's 95% CI is 1.4 to 3.1. Conclusion?",
     [
      "Significant, because 1 is not included",
      "Not significant, because 0 isn't included",
      "Not significant, because the CI is wide",
      "Can't tell"
     ],
     "For ratios, 1 means no effect. This interval excludes 1."
    ],
    [
     "Which makes a confidence interval NARROWER?",
     [
      "Larger sample size",
      "Higher confidence level (99%)",
      "More variability",
      "Smaller sample size"
     ],
     "More data → smaller SE → tighter interval."
    ],
    [
     "Cohen's d = 0.8 is considered…",
     [
      "A large effect",
      "A small effect",
      "A medium effect",
      "No effect"
     ],
     "Benchmarks: .2 small, .5 medium, .8 large."
    ],
    [
     "A special test has very high sensitivity. A NEGATIVE result helps you…",
     [
      "Rule the condition out (SnNout)",
      "Rule the condition in (SpPin)",
      "Calculate specificity",
      "Nothing, sensitivity only applies to positives"
     ],
     "High-Sn tests rarely miss true cases, so a negative is trustworthy for ruling out."
    ],
    [
     "A test with very high specificity is positive. That helps you…",
     [
      "Rule the condition in (SpPin)",
      "Rule the condition out (SnNout)",
      "Estimate prevalence",
      "Measure reliability"
     ],
     "High-Sp tests rarely flag healthy people, so a positive is trustworthy for ruling in."
    ],
    [
     "Which statistic assesses inter-rater reliability for goniometer measurements?",
     [
      "Intraclass correlation coefficient (ICC)",
      "Cohen's d",
      "Chi-square",
      "Odds ratio"
     ],
     "ICC quantifies agreement between raters on continuous measures. Kappa is for categorical ratings."
    ],
    [
     "Correct interpretation of a single 95% CI of 4 to 10 points?",
     [
      "We're 95% confident the method captured the true mean difference, plausibly 4–10",
      "95% of patients improved 4–10 points",
      "There's a 95% chance the sample mean is in 4–10",
      "The p-value is .95"
     ],
     "Confidence describes the long-run success of the method, not individual patients."
    ]
   ]
  }
 ]
});
