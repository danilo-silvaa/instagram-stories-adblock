chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [{
        'id': 1001,
        'priority': 1,
        'action': {
            'type': 'block'
        },
        'condition': {
            'urlFilter': 'www.instagram.com/api/v1/injected_story_units/',
        }
    }],
    removeRuleIds: [1001]
});