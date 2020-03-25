//
//  PWStackView.swift
//  SignUpApp
//
//  Created by Cory Kim on 2020/03/25.
//  Copyright © 2020 corykim0829. All rights reserved.
//

import UIKit

class PWStackView: SignUpStackView {
    
    private let PWAlertlabel = SignUpAlertLabel(wrongMessage: "잘못된 비밀번호 형식입니다.", correctMessage: "사용가능한 비밀번호입니다.")
    
    override func configure() {
        self.alertLabel = PWAlertlabel
        guard let alertLabel = alertLabel else { return }
        addArrangedSubview(alertLabel)
    }
}
