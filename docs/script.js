// MENU TOGGLE
const menuToggle = document.getElementById("menu-toggle");
const sideMenu = document.getElementById("side-menu");

menuToggle.addEventListener("click", () => {
  sideMenu.style.display = sideMenu.style.display === "block" ? "none" : "block";
  });

  // BACKTEST DATA FETCH
  const output = document.getElementById("comment-output");

  const owner = "OTHER_REPO_OWNER";  // Replace with actual
  const repo = "OTHER_REPO_NAME";    // Replace with actual

  async function loadLatestComment() {
    try {
        const latestCommitRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`);
            const latestCommit = (await latestCommitRes.json())[0];
                const sha = latestCommit.sha;

                    const commentsRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits/${sha}/comments`);
                        const comments = await commentsRes.json();

                            if (comments.length > 0) {
                                  output.textContent = comments[comments.length - 1].body;
                                      } else {
                                            output.textContent = "No comments found on the latest commit.";
                                                }
                                                  } catch (err) {
                                                      output.textContent = "Error loading comment.";
                                                          console.error(err);
                                                            }
                                                            }

                                                            loadLatestComment();