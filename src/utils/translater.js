export function getProjectName(project, i18n) {
  const currentLocale = i18n.locale;

  return project.name[currentLocale];
}
