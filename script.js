let isGenerated = false;
let buttonln = document.getElementById("println");
let resume = document.getElementById("resume-builder");

function hide() {
    const form = document.getElementById('inputField');
    const outputContainer = document.getElementById('output_container');
    outputContainer.innerHTML = '';

    if (!isGenerated) {
        const formData = new FormData(form);

        const container = document.createElement('div');
        container.className = 'output-container';
        container.style.display = 'block';

        const output = document.createElement('div');
        output.className = 'output';

        const heading = document.createElement('div');
        heading.className = 'heading';
        const name = document.createElement('h1');
        name.textContent = formData.get("name");
        const title = document.createElement('h4');
        title.textContent = formData.get("title");
        heading.appendChild(name);
        heading.appendChild(title);

        const info = document.createElement('div');
        info.className = 'info';


        const left = document.createElement('div');
        left.className = 'left';
        left.appendChild(createBox("Objective", formData.get("objective")));
        left.appendChild(createBox("Skills", formData.get("skills")));
        left.appendChild(createBox("Contact", formData.get("contact")));


        const right = document.createElement('div');
        right.className = 'right';
        right.appendChild(createBox("Work Experience", formData.get("work_experience")));
        right.appendChild(createBox("Academic Details", formData.get("academic_details")));
        right.appendChild(createBox("Projects", formData.get("projects")));
        right.appendChild(createBox("Achievements", formData.get("achievements")));

        info.appendChild(left);
        info.appendChild(right);

        output.appendChild(heading);
        output.appendChild(info);
        container.appendChild(output);
        outputContainer.appendChild(container);

        form.style.display = 'none';
        isGenerated = true;

        buttonln.classList.remove("print");
        resume.classList.add("print");
        

    } else {
        form.style.display = 'block';
        isGenerated = false;
        resume.classList.remove("print");
    }
}

function createBox(titleText, contentText) {
    const box = document.createElement('div');
    box.className = 'box';

    const title = document.createElement('h2');
    title.textContent = titleText;

    const content = document.createElement('p');
    content.textContent = contentText;

    box.appendChild(title);
    box.appendChild(content);
    return box;
}
