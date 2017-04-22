angular.module('starter.controllers', ['angular-svg-round-progressbar'])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function () {
        $scope.closeLogin();
      }, 1000);
    };
  })
  .controller('HelpCtrl', function ($scope, $stateParams) {

  })
  .controller('PlaylistsCtrl', function ($scope) {
    $scope.playlists = [{
      title: 'Reggae',
      id: 1
    }, {
      title: 'Chill',
      id: 2
    }, {
      title: 'Dubstep',
      id: 3
    }, {
      title: 'Indie',
      id: 4
    }, {
      title: 'Rap',
      id: 5
    }, {
      title: 'Cowbell',
      id: 6
    }];
  })

.controller('PlaylistCtrl', function ($scope, $stateParams) {})

.controller('VerifyCtrl', function ($scope, $stateParams) {})

.controller('LoginCtrl', function ($scope, $stateParams) {})
  .controller('CalendarCtrl', function ($scope, $stateParams, ionicDatePicker) {
    var ipObj1 = {
      callback: function (val) { //Mandatory
        console.log('Return value from the datepicker popup is : ' + val, new Date(val));
      },
      disabledDates: [ //Optional
        new Date(2016, 2, 16),
        new Date(2015, 3, 16),
        new Date(2015, 4, 16),
        new Date(2015, 5, 16),
        new Date('Wednesday, August 12, 2015'),
        new Date("08-16-2016"),
        new Date(1439676000000)
      ],
      from: new Date(2012, 1, 1), //Optional
      to: new Date(2016, 10, 30), //Optional
      inputDate: new Date(), //Optional
      mondayFirst: true, //Optional
      disableWeekdays: [0], //Optional
      closeOnSelect: false, //Optional
      templateType: 'popup' //Optional
    };

    $scope.openDatePicker = function () {
      ionicDatePicker.openDatePicker(ipObj1);
    };
  })

.controller('DashboardCtrl', function ($scope, $stateParams, $ionicPopup, $ionicSlideBoxDelegate) {
  $scope.showPopup = function () {
    $scope.show = $ionicPopup.show({
      templateUrl: 'templates/modal/price.html',
      cssClass: "priceCard",
      scope: $scope
    });
  }
  $scope.closePopup = function () {
    $scope.show.close();
  }
  $scope.lockSlide = function () {
    $ionicSlideBoxDelegate.enableSlide(false);
  }
  $scope.myActiveSlide = 1;

  $scope.slidePrevious = function () {

    $ionicSlideBoxDelegate.previous();
  }

  $scope.slideNext = function () {

    $ionicSlideBoxDelegate.next();
  }
})

.controller('SignUpCtrl', function ($scope, $stateParams, $ionicPopup) {
  $scope.sorryPopup = function () {
    $scope.sorry = $ionicPopup.show({
      templateUrl: 'templates/modal/pincode.html',
      cssClass: "popupSorry",
      scope: $scope
    });
  };
  $scope.closeSorry = function () {
    console.log("hello");
    $scope.sorry.close();
  };

  $scope.goBackHandler = function () {
    window.history.back(); //This works
  }
});