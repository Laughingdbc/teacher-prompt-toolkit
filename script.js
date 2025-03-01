// Prompt data
const prompts = [
    {
        id: 1,
        title: "Writing Feedback",
        category: "writing",
        difficulty: "medium",
        gradeLevel: "3-8",
        text: "Analyze this student writing sample and provide specific, actionable feedback on [organization/voice/word choice/sentence fluency]. For each strength, provide a 'glow' comment, and for each area of improvement, offer a 'grow' suggestion with a concrete example of how to revise. Place a 🤖 next to AI-generated feedback that I can personalize with a ❤️ to ensure students recognize my personal touch.",
        tags: ["feedback", "revision", "personalization"],
        likes: 42
    },
    {
        id: 2,
        title: "Writing Workshop",
        category: "writing",
        difficulty: "medium",
        gradeLevel: "K-8",
        text: "Create a mini-lesson on [writing technique] appropriate for [grade level]. Include a mentor text example, 3 guided practice activities, and an independent writing task with clear success criteria. Suggest ways to facilitate peer feedback during the revision process.",
        tags: ["mini-lesson", "mentor text", "peer feedback"],
        likes: 38
    },
    {
        id: 3,
        title: "Genre Study",
        category: "writing",
        difficulty: "hard",
        gradeLevel: "K-5",
        text: "Design a scaffolded writing process for [narrative/informational/opinion] writing for [grade level]. Include prewriting graphic organizers, a drafting checklist, revision strategies, and a final publishing plan that incorporates student choice.",
        tags: ["scaffolding", "graphic organizers", "publishing"],
        likes: 35
    },
    {
        id: 4,
        title: "Grammar in Context",
        category: "writing",
        difficulty: "medium",
        gradeLevel: "3-8",
        text: "Analyze this student writing sample and suggest 3 mini-lessons on grammar skills that would help improve the writing. For each lesson, provide an example sentence from the sample, a corrected version, and a brief activity that allows students to practice the skill within their own writing.",
        tags: ["grammar", "mini-lessons", "application"],
        likes: 29
    },
    {
        id: 5,
        title: "Writing Conferences",
        category: "writing",
        difficulty: "easy",
        gradeLevel: "K-8",
        text: "Provide a framework for conducting effective 3-5 minute writing conferences with [grade level] students. Include 5 open-ended questions to guide the conversation, strategies for providing targeted feedback, and ways to document student progress and next steps.",
        tags: ["conferences", "feedback", "documentation"],
        likes: 47
    },
    {
        id: 6,
        title: "Word Work Activities",
        category: "grammar",
        difficulty: "medium",
        gradeLevel: "3-8",
        text: "Generate 3-5 high-engagement, low-prep activities for teaching [morphological feature] suitable for [grade level]. Each activity should build on previous knowledge, incorporate movement or collaboration, and directly connect to our current unit on [topic]. Include a formative assessment strategy for each activity and suggest modifications for both struggling and advanced learners.",
        tags: ["morphology", "differentiation", "assessment"],
        likes: 51
    },
    {
        id: 7,
        title: "Word Sorting",
        category: "grammar",
        difficulty: "easy",
        gradeLevel: "K-2",
        text: "Design a progressive word sort activity focusing on [phonics pattern/spelling rule] for [grade level]. Include a list of 20-25 words to sort, instructions for introducing the sort, suggestions for independent practice, and an application activity where students use sorted words in their writing.",
        tags: ["phonics", "spelling", "word sort"],
        likes: 33
    },
    {
        id: 8,
        title: "Grammar Games",
        category: "grammar",
        difficulty: "easy",
        gradeLevel: "K-5",
        text: "Create 3 interactive grammar games that teach [specific grammar skill] to [grade level] students. Each game should take 10-15 minutes, require minimal materials, and include clear directions, examples, and an assessment component to check for understanding.",
        tags: ["games", "interactive", "assessment"],
        likes: 64
    },
    {
        id: 9,
        title: "Word Study Centers",
        category: "grammar",
        difficulty: "medium",
        gradeLevel: "K-5",
        text: "Design 4 independent word study centers that allow students to explore and practice [vocabulary/spelling/grammar] concepts at their own pace. Each center should include clear instructions, necessary materials, a recording sheet, and extension options for early finishers.",
        tags: ["centers", "independent practice", "extensions"],
        likes: 39
    },
    {
        id: 10,
        title: "Language Arts Integration",
        category: "grammar",
        difficulty: "hard",
        gradeLevel: "3-8",
        text: "Suggest ways to integrate [grammar concept] instruction with our current [reading/science/social studies] unit on [topic]. Include examples of authentic texts that showcase the concept, discussion questions that highlight usage, and a creative project where students apply the concept in meaningful ways.",
        tags: ["integration", "authentic texts", "application"],
        likes: 27
    },
    {
        id: 11,
        title: "Vocabulary Activities",
        category: "vocabulary",
        difficulty: "medium",
        gradeLevel: "K-8",
        text: "Design 3-5 vocabulary acquisition activities that promote deep understanding of these terms: [list words]. Each activity should engage multiple learning modalities, encourage student discourse, and connect to our [content area] unit on [topic]. Include assessment strategies that measure both definitional and contextual understanding.",
        tags: ["acquisition", "modalities", "assessment"],
        likes: 56
    },
    {
        id: 12,
        title: "Vocabulary Differentiation",
        category: "vocabulary",
        difficulty: "hard",
        gradeLevel: "3-8",
        text: "Create tiered vocabulary activities for these core terms: [list words]. Design one set of activities for emerging learners focusing on basic understanding, another set for on-level learners emphasizing application, and a third set for advanced learners promoting analysis and evaluation of the terms.",
        tags: ["tiered", "differentiation", "scaffolding"],
        likes: 48
    },
    {
        id: 13,
        title: "Content-Area Vocabulary",
        category: "vocabulary",
        difficulty: "medium",
        gradeLevel: "3-8",
        text: "Develop a week-long vocabulary routine for these [subject area] terms: [list words]. Include a day-by-day plan with brief activities (5-10 minutes each) that build student familiarity, understanding, and application of these terms within our [topic] unit.",
        tags: ["routine", "content-specific", "application"],
        likes: 41
    },
    {
        id: 14,
        title: "Academic Language Development",
        category: "vocabulary",
        difficulty: "medium",
        gradeLevel: "K-8",
        text: "Identify 5-7 high-utility academic vocabulary words essential for [grade level] students discussing [topic]. For each word, provide a student-friendly definition, visual representation, sentence frames for discussion, and suggestions for incorporating these terms into daily classroom routines.",
        tags: ["academic language", "visuals", "sentence frames"],
        likes: 37
    },
    {
        id: 15,
        title: "Vocabulary Assessment",
        category: "vocabulary",
        difficulty: "easy",
        gradeLevel: "K-8",
        text: "Design 3 formative assessment strategies to gauge student understanding of our unit vocabulary: [list words]. Include one quick check activity, one peer-based assessment, and one creative demonstration of knowledge that allows for student choice and voice.",
        tags: ["formative", "assessment", "student choice"],
        likes: 43
    },
    {
        id: 16,
        title: "Close Reading Protocol",
        category: "reading",
        difficulty: "medium",
        gradeLevel: "3-8",
        text: "Create a 3-day close reading sequence for [text/passage] appropriate for [grade level]. Include text-dependent questions that progress from basic understanding to deeper analysis, annotation strategies, and a culminating task that requires students to synthesize their understanding of the text.",
        tags: ["close reading", "text-dependent questions", "annotation"],
        likes: 39
    },
    {
        id: 17,
        title: "Literature Circles",
        category: "reading",
        difficulty: "medium",
        gradeLevel: "3-8",
        text: "Design role cards for literature circle discussions of [book title/genre] for [grade level]. Create 4-5 distinct roles with clear responsibilities, guiding questions, and accountability measures. Include suggestions for managing group dynamics and assessing individual contributions.",
        tags: ["literature circles", "roles", "accountability"],
        likes: 52
    },
    {
        id: 18,
        title: "Reading Strategies",
        category: "reading",
        difficulty: "easy",
        gradeLevel: "K-8",
        text: "Provide a sequence of mini-lessons on teaching [specific reading strategy] to [grade level] students. Each mini-lesson should include a clear teaching point, a think-aloud demonstration, guided practice opportunity, and an independent application task with success criteria.",
        tags: ["mini-lessons", "think-aloud", "gradual release"],
        likes: 45
    },
    {
        id: 19,
        title: "Comprehension Monitoring",
        category: "reading",
        difficulty: "hard",
        gradeLevel: "3-8",
        text: "Create a set of metacognitive tools for [grade level] students to monitor their comprehension while reading [genre/text type]. Include graphic organizers, self-assessment checklists, and reflection prompts that help students identify and address confusion or misunderstandings.",
        tags: ["metacognition", "self-assessment", "reflection"],
        likes: 36
    },
    {
        id: 20,
        title: "TAG Extensions",
        category: "differentiation",
        difficulty: "hard",
        gradeLevel: "K-8",
        text: "We're beginning a unit on [topic]. Please suggest 5 high-engagement, self-directed extension projects that allow TAG students to explore the content at greater depth or complexity. For each suggestion, include clear learning objectives aligned with advanced standards, a project timeline with checkpoints, necessary resources, and authentic assessment criteria that emphasize creative problem-solving and critical thinking.",
        tags: ["TAG", "extension", "self-directed"],
        likes: 47
    },
    {
        id: 21,
        title: "Scaffolded Instruction",
        category: "differentiation",
        difficulty: "medium",
        gradeLevel: "K-8",
        text: "Analyze this [lesson/activity] and suggest tiered scaffolding approaches for three levels of learners: those requiring additional support, on-level learners, and students ready for extension. For each tier, identify the specific modifications to content, process, and product while maintaining the same essential learning outcomes.",
        tags: ["tiered instruction", "scaffolding", "modifications"],
        likes: 53
    },
    {
        id: 22,
        title: "Learning Stations",
        category: "differentiation",
        difficulty: "medium",
        gradeLevel: "K-8",
        text: "Design 5 differentiated learning stations for our unit on [topic] that accommodate diverse learning needs in [grade level]. Each station should address the same key concept but vary in complexity, support level, and modality. Include rotation procedures, time recommendations, and assessment strategies.",
        tags: ["stations", "modalities", "rotations"],
        likes: 49
    },
    {
        id: 23,
        title: "IEP Support",
        category: "differentiation",
        difficulty: "hard",
        gradeLevel: "K-8",
        text: "Review these learning objectives for our [subject] unit and suggest specific accommodations and modifications for students with [learning disability/challenge]. Include strategies for presenting information, alternative ways for students to demonstrate understanding, and formative assessment approaches that align with their IEP goals.",
        tags: ["IEP", "accommodations", "modifications"],
        likes: 58
    },
    {
        id: 24,
        title: "ELL Support",
        category: "differentiation",
        difficulty: "hard",
        gradeLevel: "K-8",
        text: "Adapt this [lesson/unit] to support English Language Learners at varying proficiency levels. Include language objectives alongside content objectives, visual supports, sentence frames, vocabulary scaffolds, and specific strategies to build background knowledge and make content accessible.",
        tags: ["ELL", "language objectives", "scaffolds"],
        likes: 61
    },
    {
        id: 25,
        title: "Formative Assessment",
        category: "assessment",
        difficulty: "easy",
        gradeLevel: "K-8",
        text: "Suggest 5 quick formative assessment strategies to check understanding during our [topic] lessons. Each strategy should take less than 5 minutes, provide immediate data on student comprehension, and offer opportunities for students to self-assess their progress toward learning targets.",
        tags: ["quick checks", "self-assessment", "data collection"],
        likes: 67
    },
    {
        id: 26,
        title: "Rubric Development",
        category: "assessment",
        difficulty: "medium",
        gradeLevel: "K-8",
        text: "Create a student-friendly analytical rubric for assessing [specific task/project] at [grade level]. Include 3-4 key criteria aligned with standards, clear performance level descriptions for each criterion, and examples of what work might look like at each level.",
        tags: ["rubrics", "criteria", "examples"],
        likes: 43
    },
    {
        id: 27,
        title: "Feedback Protocols",
        category: "assessment",
        difficulty: "medium",
        gradeLevel: "3-8",
        text: "Design a structured peer feedback protocol for [writing/project] work that [grade level] students can use independently. Include sentence starters, a feedback form template, guidelines for constructive criticism, and a process for students to implement received feedback.",
        tags: ["peer feedback", "protocols", "implementation"],
        likes: 38
    },
    {
        id: 28,
        title: "Performance Tasks",
        category: "assessment",
        difficulty: "hard",
        gradeLevel: "3-8",
        text: "Develop an authentic performance task to assess student understanding of [standards/objectives] at the end of our [topic] unit. The task should require application of key concepts in a real-world context, allow for student choice, and include clear evaluation criteria aligned with grade-level standards.",
        tags: ["authentic", "application", "evaluation"],
        likes: 41
    },
    {
        id: 29,
        title: "Morning Meeting",
        category: "management",
        difficulty: "easy",
        gradeLevel: "K-5",
        text: "Design a week of engaging morning meeting activities for [grade level] students that build community and practice [social-emotional skill]. Each day's meeting should include a greeting, sharing opportunity, group activity, and morning message that takes no more than 15 minutes total.",
        tags: ["SEL", "community building", "routines"],
        likes: 72
    },
    {
        id: 30,
        title: "Transition Strategies",
        category: "management",
        difficulty: "easy",
        gradeLevel: "K-5",
        text: "Suggest 5 efficient transition routines for [grade level] students moving between [specific activities/subjects]. Each routine should take less than 2 minutes, incorporate clear visual and auditory cues, and include strategies for acknowledging successful transitions.",
        tags: ["transitions", "routines", "cues"],
        likes: 68
    },
    {
        id: 31,
        title: "Classroom Procedures",
        category: "management",
        difficulty: "medium",
        gradeLevel: "K-5",
        text: "Create step-by-step instructions for teaching and reinforcing these essential classroom procedures to [grade level] students: [list procedures]. Include introduction scripts, modeling suggestions, practice activities, and maintenance strategies for each procedure.",
        tags: ["procedures", "modeling", "practice"],
        likes: 54
    },
    {
        id: 32,
        title: "Behavior Support",
        category: "management",
        difficulty: "hard",
        gradeLevel: "K-8",
        text: "Design a positive behavior support plan for managing [specific challenging behavior] in [grade level] students. Include preventative strategies, clear expectations, redirection techniques, consequence hierarchy, and positive reinforcement approaches that maintain student dignity.",
        tags: ["behavior", "prevention", "reinforcement"],
        likes: 59
    },
    {
        id: 33,
        title: "Newsletter Template",
        category: "parent",
        difficulty: "easy",
        gradeLevel: "K-8",
        text: "Create a template for a weekly/monthly classroom newsletter for [grade level] parents. Include sections for curriculum updates, upcoming events, celebration of student work, home connection activities, and important reminders. Suggest ways to make the newsletter accessible to diverse families.",
        tags: ["communication", "template", "accessibility"],
        likes: 46
    },
    {
        id: 34,
        title: "Conference Planning",
        category: "parent",
        difficulty: "medium",
        gradeLevel: "K-8",
        text: "Develop a structure for productive parent-teacher conferences for [grade level] students. Include a preparation checklist, conversation framework with key talking points, strategies for discussing student data, and a follow-up action plan template for documenting next steps.",
        tags: ["conferences", "preparation", "action plans"],
        likes: 51
    },
    {
        id: 35,
        title: "Family Engagement",
        category: "parent",
        difficulty: "medium",
        gradeLevel: "K-8",
        text: "Suggest 5 meaningful ways to engage families in our [subject/topic] unit. Each idea should promote authentic home-school connections, respect diverse family structures and resources, and enhance student learning through family participation.",
        tags: ["engagement", "diversity", "home-school"],
        likes: 57
    },
    {
        id: 36,
        title: "Communication Strategies",
        category: "parent",
        difficulty: "easy",
        gradeLevel: "K-8",
        text: "Create templates for effectively communicating student [progress/challenges/successes] to parents. Include models for positive news updates, academic concern notifications, and behavior communications that are solution-focused and promote partnership.",
        tags: ["templates", "communication", "partnership"],
        likes: 49
    },
    {
        id: 37,
        title: "Digital Tools",
        category: "technology",
        difficulty: "medium",
        gradeLevel: "K-8",
        text: "Recommend 3-5 age-appropriate digital tools to enhance student learning in our [subject] unit on [topic]. For each tool, explain its specific educational purpose, provide a brief tutorial on implementation, suggest an introductory activity, and include assessment strategies for the digital work.",
        tags: ["digital tools", "implementation", "assessment"],
        likes: 62
    },
    {
        id: 38,
        title: "Blended Learning",
        category: "technology",
        difficulty: "hard",
        gradeLevel: "3-8",
        text: "Design a blended learning sequence for teaching [concept/skill] to [grade level] students. Include a balance of direct instruction, digital practice, collaborative work, and independent application with clear transitions between modes of learning.",
        tags: ["blended", "sequence", "transitions"],
        likes: 45
    },
    {
        id: 39,
        title: "Digital Citizenship",
        category: "technology",
        difficulty: "medium",
        gradeLevel: "K-8",
        text: "Create a mini-unit on digital citizenship appropriate for [grade level] students. Include 3-5 lessons addressing online safety, digital footprint, responsible communication, and critical evaluation of online information with concrete examples relevant to students' digital experiences.",
        tags: ["citizenship", "safety", "evaluation"],
        likes: 53
    },
    {
        id: 40,
        title: "Media Literacy",
        category: "technology",
        difficulty: "hard",
        gradeLevel: "3-8",
        text: "Develop a framework for teaching [grade level] students to critically evaluate media related to [current topic/theme]. Include guiding questions, analysis tools, discussion protocols, and a creative project where students apply media literacy skills.",
        tags: ["media literacy", "critical thinking", "evaluation"],
        likes: 48
    }
];

// Achievement data
const achievements = [
    {
        id: 1,
        title: "First Steps",
        icon: "🏆",
        description: "Copy your first prompt",
        unlocked: false
    },
    {
        id: 2,
        title: "Category Explorer",
        icon: "🔍",
        description: "Use prompts from 3 different categories",
        unlocked: false
    },
    {
        id: 3,
        title: "Writing Wizard",
        icon: "✍️",
        description: "Use all Writing prompts",
        unlocked: false
    },
    {
        id: 4,
        title: "Grammar Guru",
        icon: "📝",
        description: "Use all Grammar prompts",
        unlocked: false
    },
    {
        id: 5,
        title: "Word Whiz",
        icon: "📚",
        description: "Use all Vocabulary prompts",
        unlocked: false
    },
    {
        id: 6,
        title: "Power User",
        icon: "⚡",
        description: "Use 10 different prompts",
        unlocked: false
    },
    {
        id: 7,
        title: "Completionist",
        icon: "🌟",
        description: "Use 25 different prompts",
        unlocked: false
    },
    {
        id: 8,
        title: "Difficulty Master",
        icon: "🧠",
        description: "Use prompts of all difficulty levels",
        unlocked: false
    },
    {
        id: 9,
        title: "AI Explorer",
        icon: "🤖",
        description: "Use 5 different prompts in a single day",
        unlocked: false
    },
    {
        id: 10,
        title: "Prompt Pro",
        icon: "👑",
        description: "Unlock all other achievements",
        unlocked: false
    }
];

// User data
let userData = {
    promptsUsed: [],
    categoriesUsed: [],
    difficultiesUsed: [],
    achievements: [],
    totalPrompts: 0
};

// Load user data from localStorage if available
function loadUserData() {
    const savedData = localStorage.getItem('teacherPromptData');
    if (savedData) {
        userData = JSON.parse(savedData);
        updateUI();
    }
}

// Save user data to localStorage
function saveUserData() {
    localStorage.setItem('teacherPromptData', JSON.stringify(userData));
}

// Update UI based on user data
function updateUI() {
    document.getElementById('prompts-used').textContent = userData.totalPrompts;
    document.getElementById('achievement-count').textContent = `${userData.achievements.length}/10`;
    
    // Update progress ring
    const progressRing = document.getElementById('progress-ring-circle');
    const progressText = document.getElementById('progress-text');
    const totalPrompts = prompts.length;
    const uniquePromptsUsed = new Set(userData.promptsUsed).size;
    const progressPercentage = Math.round((uniquePromptsUsed / totalPrompts) * 100);
    
    progressRing.style.strokeDashoffset = 188.5 - (188.5 * progressPercentage / 100);
    progressText.textContent = `${progressPercentage}%`;
    
    // Update achievements grid
    updateAchievementsGrid();
}

// Initialize the page
function init() {
    loadUserData();
    renderPromptCards(prompts);
    setupEventListeners();
    document.getElementById('prompt-count').textContent = prompts.length;
}

// Render prompt cards
function renderPromptCards(cardsToRender) {
    const cardsContainer = document.getElementById('cards-container');
    const noResults = document.getElementById('no-results');
    
    cardsContainer.innerHTML = '';
    
    if (cardsToRender.length === 0) {
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    
    cardsToRender.forEach(prompt => {
        const card = document.createElement('div');
        card.className = `prompt-card ${prompt.category}`;
        card.style.animationDelay = `${Math.random() * 0.5}s`;
        
        // Check if this prompt was used before
        const wasUsed = userData.promptsUsed.includes(prompt.id);
        
        card.innerHTML = `
            <div class="card-header">
                ${prompt.category.charAt(0).toUpperCase() + prompt.category.slice(1)}
                <span class="grade-badge grade-${prompt.gradeLevel.toLowerCase()}">${prompt.gradeLevel}</span>
                <div class="difficulty ${prompt.difficulty}">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="card-content">
                <div class="card-title">${prompt.title}</div>
                <div class="card-text">${prompt.text}</div>
                <div>
                    ${prompt.tags.map(tag => `<span class="badge">#${tag}</span>`).join('')}
                </div>
            </div>
            <div class="card-footer">
                <button class="copy-btn" data-id="${prompt.id}">
                    ${wasUsed ? '📎 Copy Again' : '📎 Copy Prompt'}
                </button>
                <div class="likes">
                    <span>❤️</span>
                    <span>${prompt.likes}</span>
                </div>
            </div>
        `;
        
        cardsContainer.appendChild(card);
    });
    
    // Add event listeners to copy buttons
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const promptId = parseInt(this.getAttribute('data-id'));
            copyPrompt(promptId);
        });
    });
}

// Copy prompt to clipboard
function copyPrompt(promptId) {
    const prompt = prompts.find(p => p.id === promptId);
    
    if (prompt) {
        navigator.clipboard.writeText(prompt.text).then(() => {
            showCopiedToast();
            
            // Update user data
            userData.promptsUsed.push(promptId);
            if (!userData.categoriesUsed.includes(prompt.category)) {
                userData.categoriesUsed.push(prompt.category);
            }
            if (!userData.difficultiesUsed.includes(prompt.difficulty)) {
                userData.difficultiesUsed.push(prompt.difficulty);
            }
            userData.totalPrompts++;
            
            saveUserData();
            checkAchievements();
            updateUI();
            
            // Update the button text
            const btn = document.querySelector(`.copy-btn[data-id="${promptId}"]`);
            if (btn) {
                btn.textContent = '📎 Copy Again';
            }
        });
    }
}

// Show copied toast
function showCopiedToast() {
    const toast = document.getElementById('copied-toast');
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

// Check for achievements
function checkAchievements() {
    const uniquePromptsUsed = new Set(userData.promptsUsed).size;
    const uniqueCategoriesUsed = userData.categoriesUsed.length;
    const uniqueDifficultiesUsed = userData.difficultiesUsed.length;
    
    // First Steps
    if (uniquePromptsUsed >= 1 && !userData.achievements.includes(1)) {
        unlockAchievement(1);
    }
    
    // Category Explorer
    if (uniqueCategoriesUsed >= 3 && !userData.achievements.includes(2)) {
        unlockAchievement(2);
    }
    
    // Writing Wizard
    const writingPrompts = prompts.filter(p => p.category === 'writing');
    const usedAllWriting = writingPrompts.every(p => userData.promptsUsed.includes(p.id));
    if (usedAllWriting && !userData.achievements.includes(3)) {
        unlockAchievement(3);
    }
    
    // Grammar Guru
    const grammarPrompts = prompts.filter(p => p.category === 'grammar');
    const usedAllGrammar = grammarPrompts.every(p => userData.promptsUsed.includes(p.id));
    if (usedAllGrammar && !userData.achievements.includes(4)) {
        unlockAchievement(4);
    }
    
    // Word Whiz
    const vocabPrompts = prompts.filter(p => p.category === 'vocabulary');
    const usedAllVocab = vocabPrompts.every(p => userData.promptsUsed.includes(p.id));
    if (usedAllVocab && !userData.achievements.includes(5)) {
        unlockAchievement(5);
    }
    
    // Power User
    if (uniquePromptsUsed >= 10 && !userData.achievements.includes(6)) {
        unlockAchievement(6);
    }
    
    // Completionist
    if (uniquePromptsUsed >= 25 && !userData.achievements.includes(7)) {
        unlockAchievement(7);
    }
    
    // Difficulty Master
    if (uniqueDifficultiesUsed >= 3 && !userData.achievements.includes(8)) {
        unlockAchievement(8);
    }
    
    // AI Explorer (5 in a day - we'll just unlock it if they've used 5)
    if (uniquePromptsUsed >= 5 && !userData.achievements.includes(9)) {
        unlockAchievement(9);
    }
    
    // Prompt Pro (all other achievements)
    if (userData.achievements.length === 9 && !userData.achievements.includes(10)) {
        unlockAchievement(10);
    }
}

// Unlock achievement
function unlockAchievement(achievementId) {
    if (!userData.achievements.includes(achievementId)) {
        userData.achievements.push(achievementId);
        saveUserData();
        
        // Show notification
        const achievement = achievements.find(a => a.id === achievementId);
        if (achievement) {
            const toast = document.getElementById('copied-toast');
            toast.textContent = `Achievement Unlocked: ${achievement.title} ${achievement.icon}`;
            toast.classList.add('show');
            
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }
    }
}

// Update achievements grid
function updateAchievementsGrid() {
    const grid = document.getElementById('achievements-grid');
    grid.innerHTML = '';
    
    achievements.forEach(achievement => {
        const isUnlocked = userData.achievements.includes(achievement.id);
        
        const achievementEl = document.createElement('div');
        achievementEl.className = `achievement ${isUnlocked ? '' : 'locked'}`;
        
        achievementEl.innerHTML = `
            <div class="achievement-icon">${achievement.icon}</div>
            <div class="achievement-title">${achievement.title}</div>
        `;
        
        // Add tooltip with description
        achievementEl.title = achievement.description;
        
        grid.appendChild(achievementEl);
    });
}

// Set up event listeners
function setupEventListeners() {
    // Category filters
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
          document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            filterPrompts();
        });
    });
    
    // Grade level filters
    document.querySelectorAll('.grade-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.grade-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const gradeLevel = this.getAttribute('data-grade');
            filterPrompts();
        });
    });
    
    // Search input
    document.getElementById('search-input').addEventListener('input', filterPrompts);
    
    // Sort dropdown
    document.getElementById('sort-dropdown').addEventListener('change', filterPrompts);
    
    // Progress container
    document.getElementById('progress-container').addEventListener('click', function() {
        document.getElementById('achievements-modal').style.display = 'flex';
    });
    
    // Close modal
    document.getElementById('close-modal').addEventListener('click', function() {
        document.getElementById('achievements-modal').style.display = 'none';
    });
    
    // Close modal on outside click
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('achievements-modal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Filter prompts
function filterPrompts() {
    const searchText = document.getElementById('search-input').value.toLowerCase();
    const selectedCategory = document.querySelector('.category-btn.active').getAttribute('data-category');
    const selectedGradeLevel = document.querySelector('.grade-btn.active').getAttribute('data-grade');
    const sortOption = document.getElementById('sort-dropdown').value;
    
    let filteredPrompts = prompts.filter(prompt => {
        // Filter by category
        if (selectedCategory !== 'all' && prompt.category !== selectedCategory) {
            return false;
        }
        
        // Filter by grade level
        if (selectedGradeLevel !== 'all' && prompt.gradeLevel !== selectedGradeLevel) {
            return false;
        }
        
        // Filter by search text
        return (
            prompt.title.toLowerCase().includes(searchText) ||
            prompt.text.toLowerCase().includes(searchText) ||
            prompt.tags.some(tag => tag.toLowerCase().includes(searchText))
        );
    });
    
    // Sort prompts
    switch (sortOption) {
        case 'newest':
            // Newest first (by id, higher id = newer)
            filteredPrompts.sort((a, b) => b.id - a.id);
            break;
        case 'popular':
            // Most popular first (by likes)
            filteredPrompts.sort((a, b) => b.likes - a.likes);
            break;
        case 'easiest':
            // Easiest first
            const difficultyOrder = { 'easy': 1, 'medium': 2, 'hard': 3 };
            filteredPrompts.sort((a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]);
            break;
        case 'hardest':
            // Hardest first
            const difficultyOrderReverse = { 'easy': 3, 'medium': 2, 'hard': 1 };
            filteredPrompts.sort((a, b) => difficultyOrderReverse[a.difficulty] - difficultyOrderReverse[b.difficulty]);
            break;
    }
    
    renderPromptCards(filteredPrompts);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', init);
