// MENU TOGGLE
const menuToggle = document.getElementById("menu-toggle");
const sideMenu = document.getElementById("side-menu");

menuToggle.addEventListener("click", () => {
  sideMenu.style.display = sideMenu.style.display === "block" ? "none" : "block";
});

// BACKTEST DATA FETCH
const output = document.getElementById("comment-output");

const owner = "iterativv";
const repo = "NostalgiaForInfinity";

async function loadLatestComment() {
  try {
    const commitsRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=20`);
    const commits = await commitsRes.json();

    for (const commit of commits) {
      const sha = commit.sha;
      const commentsRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits/${sha}/comments`);
      const comments = await commentsRes.json();

      if (comments.length > 0) {
        output.textContent = comments[comments.length - 1].body;
        return;
      }
    }

    output.textContent = "No commit with comments found.";
  } catch (err) {
    output.textContent = "Error loading comment.";
    console.error(err);
  }
}

loadLatestComment();
loadLatestComment();
