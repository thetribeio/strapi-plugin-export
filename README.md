
# Strapi plugin export data
A plugin that allows to export collection-types and single-types with the option to provide specific formatting for the fields.
In the `config/plugins.js` file you can add this kind of formatting:

```
'export-data': {
	enabled: true,
	config: {
		formats:{
			'api::article.article': {
				'title' : () => {
					return 'My custom title';
				}
			},
			'api::product.product':{
				'title': (name) => {
					return `${name} - foo bar`
				}
			}
		}
	}
},
```
## Roadmap 🚧

 - [ ] Export entries in collection-types view
 - [ ] Use list view filters in exported data like created_at range, order by, etc.
 - [ ] Add permissions & roles

## How to contribute 🚀
[Create a new projet with Strapi](https://docs.strapi.io/dev-docs/quick-start#step-1-run-the-installation-script) : 
`yarn create strapi-app my-project --quickstart`
Create a plugins directory in your Strapi project and move into it :
`mkdir my-project/src/plugins && cd $_`
Clone the repository :
**With SSH** :
`git clone git@github.com:thetribeio/strapi-plugin-export.git`
**With HTTPS** :
`https://github.com/thetribeio/strapi-plugin-export.git`
Create a `config/plugins.js` file in the strapi project directory.
Run `yarn && yarn build` in the strapi-plugin-export directory.
Run `yarn develop` or `yarn develop --watch-admin` in the strapi directory
