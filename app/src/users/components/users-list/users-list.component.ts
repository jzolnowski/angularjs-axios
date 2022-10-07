/**
 * @ngInject
 */
export class UsersListComponent {
  static componentName: string = 'msUsersList';

  static componentConfig: ng.IComponentOptions = {
    bindings: {
      users: '<',
      selected: '<',
      selectUser: '&onSelected'
    },
    controller: UsersListComponent,
    template: `
      <md-list>
        <md-list-item ng-repeat="user in $ctrl.users">
          <md-button ng-click="$ctrl.selectUser({user:user})" ng-class="{'selected' : user === $ctrl.selected}">
            <md-icon md-svg-src="{{user.avatar}}" class="avatar"></md-icon>
            {{user.name}}
          </md-button>
        </md-list-item>
      </md-list>`
  };
}
