document.getElementById('apply').addEventListener('click', async () => {
    const selectedBrowser = document.getElementById('browserSelect').value;
    const statusDiv = document.getElementById('status');
    
    try {
      await chrome.storage.local.set({ currentBrowser: selectedBrowser });
      // Send message to background script to update rules
      await chrome.runtime.sendMessage({ type: 'updateBrowser', browser: selectedBrowser });
      statusDiv.textContent = 'Browser settings updated! Reload pages to see changes.';
      statusDiv.style.color = 'green';
    } catch (error) {
      statusDiv.textContent = 'Error updating settings: ' + error.message;
      statusDiv.style.color = 'red';
    }
  });
  