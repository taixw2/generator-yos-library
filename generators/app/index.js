"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the good ${chalk.red("generator-yos-library")} generator!`
      )
    );

    const prompts = [
      {
        type: "input",
        name: "name",
        message: "输入你的项目名称",
        default: this.appname
      },
      {
        type: "input",
        name: "describe",
        message: "输入你的项目描述",
        default: ""
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    const files = [
      "README.md",
      "scripts/bundles/create-bundle.ts",
      "scripts/bundles/index.ts",
      "scripts/bundles/util.ts",
      "scripts",
      "scripts",
      "commitlint.config.js",
      "tsconfig.dts.json",
      "index.js",
      "tsconfig.json",
      "package.json",
      "yarn.lock"
    ];

    files.forEach(file => {
      this.fs.copyTpl(
        this.templatePath(file),
        this.destinationPath(file),
        this.props
      );
    });
  }

  install() {
    this.installDependencies({ yarn: true, bower: false, npm: false });
  }
};
