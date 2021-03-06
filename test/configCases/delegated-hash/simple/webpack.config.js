var DelegatedPlugin = require("../../../../lib/DelegatedPlugin");
var HashedModuleIdsPlugin = require("../../../../lib/HashedModuleIdsPlugin");
module.exports = {
	plugins: [
		new HashedModuleIdsPlugin(),
		new DelegatedPlugin({
			source: "./bundle",
			type: "require",
			context: __dirname,
			content: {
				"./a.js": { id: 0 },
				"./loader.js!./b.js": { id: 1 },
				"./dir/c.js": { id: 2 }
			}
		}),
		new DelegatedPlugin({
			source: "./bundle2",
			type: "object",
			context: __dirname,
			content: {
				"./d.js": { id: 3 },
				"./e.js": { id: 4 }
			}
		})
	]
};
